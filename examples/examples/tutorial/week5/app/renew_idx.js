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
        files.push([file, fullName])
      }
    })
  }

  find_files_rec(dir)


  // 创建package.json
  const full_pgk_file = path.resolve(__dirname, dir, "package.json")
  const full_idx_file = path.resolve(__dirname, dir, "index.js")
  fs.writeFileSync(full_pgk_file, tpl_pkg(dir))

  // 创建index.js
  const lines = []
  files.forEach(p => {
    const [name, fullName] = p
    if(!name.match(/package\.json|index\.js/)) {

      const moduleName = name.split(".").shift()
      lines.push(`  get ${moduleName}(){ return require("./${fullName}").default }, `)
    }
  })
  const content = `
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
