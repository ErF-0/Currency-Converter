import LeftAndRightArrows from "../icons/LeftAndRightArrows";

const ConvertOperation = ({
  amount,
  setAmount,
  setCurrency,
  fromCurrencyData,
  toCurrencyData,
}) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    const regex = /^\d*\.?\d*$/;

    if ((regex.test(value) || value === "") && value.length <= 15) {
      setAmount(value);
    }
  };
  return (
    <header className="flex justify-between items-center flex-wrap gap-3 ">
      <div className="flex flex-col justify-center gap-3 sm:basis-full md:basis-[auto] ">
        <p className="text-xl">Amount</p>
        <div
          className={`flex items-center gap-1 md:w-52 lg:w-64 xl:w-80 h-16 p-3 border-[1px] border-solid ${
            amount ? "border-teal-500" : "border-red-500"
          } rounded-md`}
        >
          <span className="text-xl">{fromCurrencyData.symbol}</span>
          <input
            className="bg-transparent outline-none text-lg"
            type="text"
            value={amount}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 ">
        <p className="text-xl">From</p>
        <div className="flex justify-center items-center gap-1 sm:w-64 md:w-52  lg:w-64 xl:w-80 h-16 p-3 border-[1px] border-solid border-teal-500 rounded-md">
          <span>{fromCurrencyData.icon}</span>
          <p className="text-lg">{`${fromCurrencyData.currency} - ${fromCurrencyData.title}`}</p>
        </div>
      </div>

      <div className=" pt-8">
        <button
          className=" p-2 border-solid border-[1px] border-teal-500 rounded-full"
          onClick={() => setCurrency(fromCurrencyData.convertTo)}
        >
          <LeftAndRightArrows />
        </button>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <p className="text-xl">To</p>
        <div className="flex justify-center items-center gap-1 sm:w-64 md:w-52  lg:w-64 xl:w-80 h-16 p-3 border-[1px] border-solid border-teal-500 rounded-md">
          <span>{toCurrencyData.icon}</span>
          <p>{`${toCurrencyData.currency} - ${toCurrencyData.title}`}</p>
        </div>
      </div>
    </header>
  );
};

export default ConvertOperation;
