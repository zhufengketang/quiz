module.exports = function(){
  const paths = [...arguments]
  return paths.map(x => {
    return x.replace(/(^\/|\/$)/g, "")
  }).join("/")
}
