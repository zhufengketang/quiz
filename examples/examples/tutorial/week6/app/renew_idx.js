const fs = require('fs')
const path = require('path')


const files = fs.readdirSync(__dirname)


/**
 * 创建package.json的模板
 */
const tpl_pkg = (pkgName) => {
  return `{
  "name" : "${pkgName}"
}

  `

}

function create_index(dir) {

  const files = []
  function find_files_rec(_dir) {
    const l = fs.readdirSync(path.resolve(__dirname, _dir))
    l.forEach( file => {
      if(fs.statSync(path.resolve(__dirname, _dir, file)).isDirectory()) {
        find_files_rec(path.join(_dir, file))
      }
      else {
        const list = path.join(_dir, file).split("/")
        list.shift()
        const fullName = list.join("/")
        files.push([file, fullName, path.resolve(_dir, file)])
      }
    })
  }

  find_files_rec(dir)


  // 创建package.json
  const full_pgk_file = path.resolve(__dirname, dir, "package.json")
  const full_idx_file = path.resolve(__dirname, dir, "index.js")
  fs.writeFileSync(full_pgk_file, tpl_pkg(dir))

  // 创建index.js
  const headers = []
  const lines = []
  files.forEach(p => {
    const [name, fullName, fullFileName] = p
    if(!fullName.match(/\.js$/)) {
      return
    }
    if(!name.match(/package\.json|index\.js|global/)) {

      const moduleName = name.split(".").shift()
      const fileContent = fs.readFileSync(fullFileName, 'utf-8')

      if(fileContent.match(/export\s+default\s+class\s+\w+/)){
        const m = fileContent.match(/export\s+default\s+class\s+\w+/g)
        m.forEach(k => {
          const n = k.split(/\s/).pop()

          const _line = `  get ${n}() { return  require("./${fullName}").default },`
          lines.push(_line)
        })

      }
      else if (fileContent.match(/module.exports/)) {
          const _line = `  get ${moduleName}() { return require("./${fullName}") },`
          lines.push(_line)
      }
      else if( fileContent.match(/export\s+let\s+\w+/)) {

        const m = fileContent.match(/export\s+let\s+\w+/)
        m.forEach(k => {
          const n = k.split(/\s/).pop()
          //headers.push(`const ${moduleName} = require("./${fullName}")`)
          const _line = `  get ${moduleName}() {return require('./${fullName}').${moduleName} },`
          lines.push(_line)
        })
      }
      else if(fileContent.match(/export\s+const\s+\w+/)) {
        const m = fileContent.match(/export\s+const\s+\w+/g)
        //headers.push(`const ${moduleName} = require("./${fullName}")`)
        m.forEach(k => {
          const n = k.split(/\s/).pop()
          const _line = `  get ${n}() { return require("./${fullName}").${n}},`
          lines.push(_line)
        })
      }
      else if(fileContent.match(/export\s+class\s+\w+/)) {
        const m = fileContent.match(/export\s+class\s+\w+/)
        m.forEach(k => {
          const n = k.split(/\s/).pop()
          //headers.push(`const ${moduleName} = require("./${fullName}")`)
          const _line = `  get ${moduleName}() {return require('./${fullName}').${moduleName}},`
          lines.push(_line)
        })
      }
      else {

        throw 'unkown type in ' + fullName
      }
      //lines.push(`  get ${moduleName}(){ return require("./${fullName}").default }, `)

    }
  })
  const content = `
${headers.join("\n")}
module.exports = {
${lines.join("\n")}
}
  `
  fs.writeFileSync(full_idx_file, content)
}

// 循环一级目录结构
files.forEach(file => {
  if(fs.statSync(file).isDirectory()){
    create_index(file)
  }
})
