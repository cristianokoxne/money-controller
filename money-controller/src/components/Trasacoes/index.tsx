import {Container}from './style'

export function Transações(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th >Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >desenvolvimento de site</td>
                        <td>R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20021</td>

                    </tr>
                    <tr>
                        <td >desenvolvimento de site</td>
                        <td>R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20021</td>

                    </tr>
                    <tr>
                        <td >desenvolvimento de site</td>
                        <td className='entrada'>R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20021</td>

                    </tr>
                    <tr>
                        <td >desenvolvimento de site</td>
                        <td className='saida'>- R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20021</td>

                    </tr>
                    <tr>
                        <td >desenvolvimento de site</td>
                        <td>R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20021</td>

                    </tr>
                </tbody>
            </table>

        </Container>

    );
}