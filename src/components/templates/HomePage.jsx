import { useEffect, useRef, useState } from "react";

import { currencyDataPromise } from "../../constants/currencyData";
//helpers
import currencyConveter from "../../utils/currencyConverter";
//components
import ConvertOperation from "../modules/ConvertOperation";
import ConvertResult from "../modules/ConvertResult";

const HomePage = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [stateResult, setStateResult] = useState("");
  const [currencyData, setCurrencyData] = useState(null);
  const stateCurrency = useRef({ amount: "", currency: "" });

  useEffect(() => {
    currencyDataPromise.then((data) => {
      setCurrencyData(data);
    });
  }, []);

  if (!currencyData) {
    return <div>Loading...</div>;
  }

  const fromCurrencyData = currencyData[currency];
  const toCurrency = fromCurrencyData.convertTo;
  const toCurrencyData = currencyData[toCurrency];
  const result = currencyConveter(
    fromCurrencyData.rate,
    toCurrencyData.rate,
    amount
  );

  return (
    <section>
      <ConvertOperation
        amount={amount}
        setAmount={setAmount}
        setCurrency={setCurrency}
        fromCurrencyData={fromCurrencyData}
        toCurrencyData={toCurrencyData}
      />
      {amount && (
        <ConvertResult
          amount={amount}
          currency={currency}
          stateCurrency={stateCurrency}
          stateResult={stateResult}
          setStateResult={setStateResult}
          fromCurrencyData={fromCurrencyData}
          toCurrencyData={toCurrencyData}
          result={result}
        />
      )}
    </section>
  );
};

export default HomePage;
