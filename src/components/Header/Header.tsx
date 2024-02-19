import * as S from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          {/* sem esse asChild teriam que ir no styled-componentes, importar importar o dialog e trocar a parte "styled.button" para "styled.(dialog.trigger)"
          enfim, este asChild faz com que o trigger vire a tag filho, sem ele teriamos dois buttons */}
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          {/**Faz com que o elemento que está dentro dele vá parar em outro local */}
          <Dialog.Portal>
            {/**Fundo preto */}
            <Dialog.DialogOverlay>
              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <Dialog.Close></Dialog.Close>
              </Dialog.Content>
            </Dialog.DialogOverlay>
          </Dialog.Portal>
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
