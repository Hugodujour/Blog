import { useState } from "react";

export default function useToggle(initial) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);
  return [state, toggle];
}
