import { MagnifyingGlass } from "phosphor-react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
export function SearchForm() {
  const SearchFormSchema = z.object({
    query: z.string(),
  });

  type SearchFormInputs = z.infer<typeof SearchFormSchema>;

  const { register, handleSubmit } = useForm<SearchFormInputs>();
  function handleSearchTransactions() {
    return;
  }
  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}
