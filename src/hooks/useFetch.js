import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [prevUrl, setPrevUrl] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const fetchResponse = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setApiResponse(json);
  };
  useEffect(() => {
    if (prevUrl != url) {
      fetchResponse();
      setPrevUrl(url);
    }
  }, [url]);
  return apiResponse;
};

export default useFetch;
