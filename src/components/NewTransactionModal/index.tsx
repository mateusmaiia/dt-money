import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const NewTransactionFormSchema = z.object(){
  description: z.string(),
  price: z.number(),
  category: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

export function NewTransactionModal() {
  const { register, handleSubmit } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
  });

  return (
    <Dialog.Portal>
      {/**Faz com que o elemento que está dentro dele vá parar em outro local */}
      {/**Fundo preto */}
      <S.Overlay>
        <S.Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <form >
            <input 
              type="text" 
              placeholder="Descrição"
              required 
              {...register('description')}
            />
            <input 
              type="number
              "placeholder="Preço" 
              required 
              {...register('price', {valueAsNumber: true})}
            />
            <input 
              type="text" 
              placeholder="Categoria"
              {...register('category')}
              required 
            />

            <S.TransactionType>
              <S.TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
              </S.TransactionTypeButton>
              <S.TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </S.TransactionTypeButton>
            </S.TransactionType>

            <button type="submit">Cadastrar</button>
          </form>

          <S.Close>
            <X size={24} />
          </S.Close>
        </S.Content>
      </S.Overlay>
    </Dialog.Portal>
  );
}
