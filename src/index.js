module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let brackets = {};
  for (let index of bracketsConfig) {
    brackets[index[1]] = index[0]
  }

  for (let i = 0; i < str.length; i++) {
    arr.length === 0 ? arr.push(str[i]) : (brackets[str[i]] === arr[arr.length - 1] ? arr.pop() : arr.push(str[i]))
  }

  return !arr.length;
}