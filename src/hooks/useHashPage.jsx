import { useEffect, useState } from "react";

export default function useHashPage() {
  const [hash, setHash] = useState(location.hash);

  useEffect(() => {
    const change = () => {
      setHash(location.hash);
    };
    window.addEventListener("hashchange", change);
    () => window.removeEventListener("hashchange", change);
  }, []);

  const cleanedHash = hash.replaceAll("#", "").toLowerCase();

  return {
    page: cleanedHash ? cleanedHash.split(":")[0] : "home",
    param: cleanedHash ? cleanedHash.split(":")[1] : "home",
  };
}
