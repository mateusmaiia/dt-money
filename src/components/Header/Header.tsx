import * as S from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

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
          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
