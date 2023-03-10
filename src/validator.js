const validator = {
  isValid(creditCardNumber) {
    const arrayNumber = creditCardNumber.toString().split('').reverse();
    for (let index = 1; index < arrayNumber.length; index += 2) {
      let number = arrayNumber[index];
      number *= 2;
      if (number >= 10) {
        const arraySum = number.toString().split('');
        number = parseInt(arraySum[0]) + parseInt(arraySum[1]);
      }
      arrayNumber[index] = number;
    }

    let result = 0;
    for (let index = 0; index < arrayNumber.length; index++) {
      result += parseInt(arrayNumber[index]);
    }
    if (result % 10 === 0) {
      return true;
    }
    return false;
  },

  maskify(creditCardNumber) {
    const arrayNumber = creditCardNumber.toString().split('');
    for (let index = 0; index < arrayNumber.length - 4; index++) {
      arrayNumber[index] = "#";
    }
    return arrayNumber.join('');
  }

};


export default validator;
