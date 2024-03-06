/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = ( url, Options = {}) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const respond = await fetch(url, { ...Options });
      if (!respond.ok) {
        throw new error(respond.statusText);
      }
      const result = await respond.json();
      if (result) {
        setData(result);
      }
      setPending(false);
    } catch (e) {
      setError(e);
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return [data,pending,error];
};
export default useFetch;