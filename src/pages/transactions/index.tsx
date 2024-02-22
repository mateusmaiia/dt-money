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
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>

              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 59.000,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
