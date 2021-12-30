import { Summary } from "../Summary";
import { Container } from "./styles";
import { Transações } from "../Trasacoes";
export function Dashboard(){
    return(
        <Container>
            <Summary></Summary>
            <Transações></Transações>
        </Container>
    );
}