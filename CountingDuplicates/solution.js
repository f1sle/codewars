function duplicateCount(text){
  const textArr = text.replace(' ', '').toLowerCase().split('');
  const filtered = textArr.filter((el,i) => textArr.slice(0,i).includes(el));
  const duplicatesLength = new Set(filtered).size;
  
  return duplicatesLength;
}