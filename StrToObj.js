function StrToObj(str){
  let arr = str.split("&")
  let c = {}
  arr.map(e=>{
      let a = e.split("=")[0]
      let b = e.split("=")[1]
      c[a] = b
  })
  return c
}

export default StrToObj
