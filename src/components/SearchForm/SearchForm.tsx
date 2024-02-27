import { MagnifyingGlass } from "phosphor-react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export function SearchForm() {
  const SearchFormSchema = z.object({
    query: z.string(),
  });

  type SearchFormInputs = z.infer<typeof SearchFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });
  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data);
  }
  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}
