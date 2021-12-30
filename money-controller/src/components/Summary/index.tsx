import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export function Summary(){
    return(

        <Container>
           <div>
               <header>
                   <p> Entradas</p>
                   <img src={incomeImg} alt="Entradas" />
               </header>
               <strong> R$ 1000,00 </strong>
           </div>
           <div>
               <header>
                   <p> Saídas</p>
                   <img src={outImg} alt="Saidas" />
               </header>
               <strong> - R$ 500,00 </strong>
           </div>
           <div className="total">
               <header>
                   <p> Entradas</p>
                   <img src={total} alt="Total" />
               </header>
               <strong> R$ 500,00 </strong>
           </div>
        </Container>
        
    );
}