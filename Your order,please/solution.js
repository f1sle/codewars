function order(words){
  const wordsArr = words.split(' ');
  const regexp = /\d/;
  
  if (words === "") return words;
  
  const getNumber = (word) => +word.match(regexp)[0];
  
  return wordsArr.sort((a,b) => getNumber(a) - getNumber(b)).join(" ");
  
}