import { ReactNode, createContext, useEffect, useState } from "react";

interface transactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface transactionContextType {
  transactions: transactionProps[];
}

interface transactionsProviderProps {
  children: ReactNode; //Qualquer elemento valido no react
}

export const TransactionsContext = createContext({} as transactionContextType);

export function TransactionsProvider({ children }: transactionsProviderProps) {
  const [transactions, setTtransactions] = useState<transactionProps[]>([]);
  useEffect(() => {
    async function FetchDatas() {
      try {
        const response = await fetch("http://localhost:3333/transactions");
        const data = await response.json();
        return setTtransactions(data);
      } catch (err) {
        console.log(err);
      }
    }

    FetchDatas();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
