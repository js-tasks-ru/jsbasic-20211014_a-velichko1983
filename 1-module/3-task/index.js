function ucFirst(str) {
  if (str !== null){
    return str.replace(str.slice(0,1), str.slice(0,1).toUpperCase())    
  }
  return ''  
}
