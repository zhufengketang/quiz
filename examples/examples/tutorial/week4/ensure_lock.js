module.exports = f => {
  let lock = false

  function done() {
    lock = false
  }
  return () => {
    if(lock) {return}
    if(!lock) {lock = true}
    return f(done)
  }
}
