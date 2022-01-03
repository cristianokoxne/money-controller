import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { Contai, Container, Content } from './styles';
import Modal from 'react-modal' 
import closeImg from '../../assets/close.svg'



export function Header(){
    const [modalTransac, setModalTransac] = useState(false);

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