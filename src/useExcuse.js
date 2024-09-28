import { useEffect, useState } from "react";

export function useExcuse(type) {
  const [excuse, setExcuse] = useState("");

  useEffect(() => {
    async function generateExcuse() {
      if (!type) return;
      const res = await fetch(
        `https://excuser-three.vercel.app/v1/excuse/${type}/`
      );
      const data = await res.json();

      setExcuse(data[0].excuse);
    }

    generateExcuse();
  }, [type]);

  useEffect(() => {
    console.log(excuse);
  }, [excuse]);
  return excuse;
}
