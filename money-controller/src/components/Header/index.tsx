import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { Contai, Container, Content, TipoDeTransacao, RadioBox} from './styles';
import Modal from 'react-modal' 
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'



export function Header(){
    const [modalTransac, setModalTransac] = useState(false);
    const [type, setType] = useState('deposit')

    function openModalTransac(){
        setModalTransac(true);
    }
    function closeModalTransac(){
        setModalTransac(false);
    }


    return(
        <Container> 
            <Content>
                <img src={logo} alt="money-controller" />
                <button type="button" onClick={openModalTransac}> Nova transação</button>
            </Content>
            <Modal 
                isOpen = {modalTransac}
                onRequestClose = {closeModalTransac}
                overlayClassName="react-modal"
                className="react-modal-content"
            >
                
               <Contai>
                    <button className='button' onClick={closeModalTransac}>
                        <img src={closeImg} alt="fechar" />
                    </button>

                   
                    <h1>Cadastrar transação</h1>
                    <input 
                        placeholder='Titulo'
                    />
                     <input 
                        type='number'
                        placeholder='Valor'
                    />
                    <TipoDeTransacao>
                            <RadioBox  isActive={type ==='deposit'}type='button' onClick={()=>setType('deposit')}>
                                <img src={incomeImg} alt="seta cima" />
                                <span>Entrada</span>
                            </RadioBox>
                            <RadioBox isActive={type ==='withdraw'} type='button' onClick={()=>setType('withdraw')}>
                                <img src={outcomeImg} alt="seta baixo" />
                                <span>Saída</span>
                            </RadioBox>


                    </TipoDeTransacao>
                     <input 
    
                        placeholder='Categoria'
                    />
                    <button className='confirm' type="submit">
                        Cadastrar
                    </button>
        
               </Contai>
            </Modal>
        </Container>

    );
}