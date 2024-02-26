import React, { createContext, useState } from "react";

interface NumeroProps {
  id: number;
  numero: number;
}
interface TesteContextProps {
  numero: NumeroProps;
  setNumero: React.Dispatch<React.SetStateAction<NumeroProps>>;
  convert: (num: number) => number;
  teste: string;
}
interface ChildrenProps {
  children: React.ReactNode;
}
export const TesteContext = createContext({} as TesteContextProps);

export function TesteProvider({ children }: ChildrenProps) {
  const [numero, setNumero] = useState<NumeroProps>({
    id: 0,
    numero: 0,
  });
  function convert(num: number) {
    return num * 60;
  }
  const teste = "teste";
  const value = {
    convert,
    teste,
    numero,
    setNumero,
  };
  return (
    <TesteContext.Provider value={value}>{children}</TesteContext.Provider>
  );
}
