module.exports = function check(str, bracketsConfig) {
  let stack = [], miniStack = [], open = [], close = [], chars = str.split('')
  let openRes, closeRes, openIndex, closeIndex;
  bracketsConfig.map((el) => {
    openRes = open.push(el[0]);
    closeRes = close.push(el[1]);
  })
  console.log(open)
  console.log(close)
  for (let i = 0, len = chars.length; i < len; i++) {
    openIndex = open.indexOf(chars[i]);

    function num() {
      return chars[i]
    }
    if (miniStack.find(num) ==='|' || miniStack.find(num) === '7' || miniStack.find(num) === '8') {
      miniStack.pop();
      console.log(miniStack)
        closeIndex = close.indexOf(chars[i]);
      if (closeIndex !== -1) {
          openIndex = stack.pop();
          if (closeIndex !== openIndex) {
              return false;
          }
      }
    }
    if (chars[i] === '|' || chars[i] === '7' || chars[i] === '8') {
      miniStack.push(chars[i]);
      console.log(miniStack);
      stack.push(openIndex);
      return true;
    }
    // if (stack.find(chars[i]) === '|' || stack.find(chars[i]) === '7') {
    //   closeIndex = close.indexOf(chars[i]);
    // if (closeIndex !== -1) {
    //     openIndex = stack.pop();
    //     if (closeIndex !== openIndex) {
    //         return false;
    //     }
    // }
    // }
    if (openIndex !== -1) {
        stack.push(openIndex);
        continue;
    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
            return false;
        }
    }
 }

 if (stack.length !== 0) {
     return false;
 }

 return true;
}
