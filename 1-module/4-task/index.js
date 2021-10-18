function checkSpam(str) {
let spamList = ['1xBet', 'xxx']
  str = str.toLowerCase()   
  if (spamList.some(spamItem => str.includes(spamItem.toLowerCase()))){
    return true
  }
return false
}
