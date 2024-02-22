import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Summary } from "../../components/Summary/Summary";
import * as S from "./styles";

interface transactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
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
    <div>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.category}</td>
                <td>
                  <S.PriceHighlight variant="income">
                    {transaction.price}
                  </S.PriceHighlight>
                </td>

                <td>{transaction.type}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
