const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const fetching = async () => {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result.price;
  } catch (error) {
    console.log(error);
  }
};

export default fetching;
