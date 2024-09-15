import { formatNumber } from "./currencyConverter";

const BASE_URL = import.meta.env.VITE_REACT_APP_EXCHANGE_URL;

const fetchStateCurrencyConverter = async (
  fromCurrency,
  toCurrency,
  amount
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${fromCurrency}/${toCurrency}/${amount}`
    );
    const data = await response.json();
    const result = data["conversion_result"];
    return formatNumber(result);
  } catch (error) {
    console.log(error);
  }
};

export default fetchStateCurrencyConverter;
