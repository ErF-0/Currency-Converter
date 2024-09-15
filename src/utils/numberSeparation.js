const sp = (number) => {
  if (number >= 1) {
    const [integerPart, decimalPart] = number.toString().split(".");

    // Format the integer part with commas
    const separatedInteger = integerPart.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const formattedInteger = separatedInteger?.join(",");

    const formattedDecimal = decimalPart ? decimalPart.slice(0, 2) : null;

    return formattedDecimal
      ? `${formattedInteger}.${formattedDecimal}`
      : formattedInteger;
  } else {
    return number;
  }
};

export default sp;




















// const sp = (number) => {
//   if (number >= 1) {
//     const separatedNumber = number
//       .toString()
//       .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
//     const joinedNumber = separatedNumber?.join(",");
//     return joinedNumber;
//   } else {
//     return number;
//   }
// };

// export default sp;
