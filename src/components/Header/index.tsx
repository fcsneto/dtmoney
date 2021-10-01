import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
    newTransaction: () => void;
}

export function Header({newTransaction}: HeaderProps){

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={newTransaction}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}