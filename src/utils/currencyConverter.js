import sp from "./numberSeparation";

const currencyConveter = (fromCurrencyRate, toCurrencyRate, amount) => {
  const convertionRate = toCurrencyRate / fromCurrencyRate;
  const convertedAmount = amount * convertionRate;
  return formatNumber(convertedAmount);
};
const formatNumber = (number) => {
  if (isNaN(number)) {
    return "";
  } else {
    return number < 1 && number !== 0 ? number.toFixed(8) : sp(number);
  }
};

export { formatNumber };
export default currencyConveter;
