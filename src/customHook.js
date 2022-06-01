import { useEffect, useState } from "react";

export const useCustom = (forward = false) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setcount((count) => count + 1);
      } else {
        setcount((count) => count - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forward]);
  return count;
};
