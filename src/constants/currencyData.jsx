import fetching from "../utils/fetch.js";
// icons
import IranFlagIcon from "../components/icons/IranFlagIcon.jsx";
import AmericaFlagIcon from "../components/icons/AmericaFlagIcon.jsx";

const rialRatePromise = fetching();

const currencyDataPromise = rialRatePromise.then((rialRate) => ({
  USD: {
    icon: <AmericaFlagIcon />,
    currency: "USD",
    title: "US Dollar",
    symbol: "$",
    rate: 1,
    convertTo: "IRR",
  },
  IRR: {
    icon: <IranFlagIcon />,
    currency: "IRR",
    title: "Iranian Rial",
    symbol: "ریال",
    rate: rialRate,
    convertTo: "USD",
  },
}));

export { currencyDataPromise };

// const rialRate = await fetching();
// const currencyData = {
//   USD: {
//     icon: <AmericaFlagIcon />,
//     currency: "USD",
//     title: "US Dollar",
//     symbol: "$",
//     rate: 1,
//     convertTo: "IRR",
//   },
//   IRR: {
//     icon: <IranFlagIcon />,
//     currency: "IRR",
//     title: "Iranian Rial",
//     symbol: "ریال",
//     rate: rialRate,
//     convertTo: "USD",
//   },
// };
