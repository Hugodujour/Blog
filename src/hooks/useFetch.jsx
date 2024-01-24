import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setData(data))
      .catch((e) => setErrors(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { data: data, loading: loading, errors: errors };
}
