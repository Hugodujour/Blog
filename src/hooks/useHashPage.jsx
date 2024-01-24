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

  return { page: hash.replaceAll("#", "").toLowerCase() || "home" };
}
