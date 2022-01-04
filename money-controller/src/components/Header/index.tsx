import { FormEvent, useState } from 'react';
import logo from '../../assets/logo.svg'
import { Contai, Container, Content, TipoDeTransacao, RadioBox} from './styles';
import Modal from 'react-modal' 
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';



export function Header(){
    const [modalTransac, setModalTransac] = useState(false);
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function openModalTransac(){
        setModalTransac(true);
    }
    function closeModalTransac(){
        setModalTransac(false);
    }
    function createTransation(event: FormEvent){
        event.preventDefault();

        const data ={
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data);
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
                
               <Contai onSubmit={createTransation}>
                    <button className='button' onClick={closeModalTransac}>
                        <img src={closeImg} alt="fechar" />
                    </button>

                   
                    <h1>Cadastrar transação</h1>
                    <input 
                        placeholder='Titulo'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                     <input 
                        type='number'
                        placeholder='Valor'
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                    />
                    <TipoDeTransacao>
                            <RadioBox activeColor = "green" isActive={type ==='deposit'}type='button' onClick={()=>setType('deposit')}>
                                <img src={incomeImg} alt="seta cima" />
                                <span>Entrada</span>
                            </RadioBox>
                            <RadioBox activeColor = "red" isActive={type ==='withdraw'} type='button' onClick={()=>setType('withdraw')}>
                                <img src={outcomeImg} alt="seta baixo" />
                                <span>Saída</span>
                            </RadioBox>


                    </TipoDeTransacao>
                     <input 
    
                        placeholder='Categoria'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                    <button className='confirm' type="submit">
                        Cadastrar
                    </button>
        
               </Contai>
            </Modal>
        </Container>

    );
}