function validParentheses(parens) {
  const arr = parens.split('');
  if (arr.length === 0) return true;
  if (arr.length > 1 && arr[0] !== ')') {
    let count = 0;
    for(let i = 0; i <= arr.length - 1;i++) {
        if (count < 0) return false;
        arr[i] === '(' ? ++count : --count;
    }
    return count === 0 ? true : false;
  }
  return false;
}