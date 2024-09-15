import sp from "../../utils/numberSeparation";

import fetchStateCurrencyConverter from "../../utils/StateCurrencyConverter";

const ConvertResult = ({
  amount,
  currency,
  stateCurrency,
  stateResult,
  setStateResult,
  fromCurrencyData,
  toCurrencyData,
  result,
}) => {
  const showStateCurrency = async () => {
    stateCurrency.current.amount = amount;
    stateCurrency.current.currency = currency;

    const fetchStateResult = await fetchStateCurrencyConverter(
      currency,
      fromCurrencyData.convertTo,
      amount
    );
    setStateResult(fetchStateResult);
  };
  return (
    <div className="flex sm:flex-col lg:flex-row justify-between items-center sm:gap-5 md:gap-3 mt-20">
      <div className="flex basis-[35%] flex-col justify-center gap-5  ">
        <p className="text-xl text-lime-500">Open Market Currency :</p>
        <p className="text-lg opacity-90">{`${sp(amount)} ${
          fromCurrencyData.title
        } =`}</p>
        <p className="custom-scroll md:w-[500px] lg:w-72 xl:w-96 text-4xl text-lime-500 ">
          {`${result}`}{" "}
        </p>
        <span className="text-lime-500 text-xl">{`${toCurrencyData.title}`}</span>
      </div>

      <div className="basis-[30%]">
        <button
          className="px-3 py-4 border-solid border-[1px] border-teal-500 rounded-md hover:text-white hover:bg-teal-500 transition-colors"
          onClick={showStateCurrency}
        >
          Show State Currency Result
        </button>
      </div>
      <div className="flex basis-[35%] flex-col justify-center gap-5 ">
        {currency === stateCurrency.current.currency &&
        amount === stateCurrency.current.amount ? (
          <>
            <p className="text-xl text-yellow-500">State Currency :</p>
            <p className="text-lg opacity-90">{`${sp(amount)} ${
              fromCurrencyData.title
            } =`}</p>
            <p className="custom-scroll md:w-[500px] lg:w-72 xl:w-96 text-4xl text-yellow-500 ">
              {`${stateResult}`}{" "}
            </p>
            <span className="text-yellow-500 text-xl">{`${toCurrencyData.title}`}</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ConvertResult;
