import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

export function NewTransactionModal() {
  const { 
    register,
    handleSubmit,
    formState: {isSubmitting},
    control
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs){
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }
  return (
    <Dialog.Portal>
      {/**Faz com que o elemento que está dentro dele vá parar em outro local */}
      {/**Fundo preto */}
      <S.Overlay>
        <S.Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
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

            <Controller
              control={control}
              name="type"
              render={({field}) => {
                return(
                  <S.TransactionType 
                    onValueChange={field.onChange}
                    value={field.value}  
                  >
                  <S.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.TransactionTypeButton>
                  <S.TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.TransactionTypeButton>
                </S.TransactionType>
    
                )
              }}
            /> 

            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </form>

          <S.Close>
            <X size={24} />
          </S.Close>
        </S.Content>
      </S.Overlay>
    </Dialog.Portal>
  );
}
