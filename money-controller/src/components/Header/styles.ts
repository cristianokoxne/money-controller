import styled from 'styled-components'
import { transparentize } from 'polished';
export const Container = styled.header`
    background: var(--blue);

`;
export const Contai = styled.form`
    .button{
        border-style: none;
        background: none;
       right: 1.5rem;
       top: 1.5rem;
        position: absolute;
        transition: 2s;
       
        &:hover{
            
            filter: brightness(0.7);
           
        }
       

    }
    h1{
        color:var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-size: 1rem;
        font-weight: 400;

        &::placeholder{
            color: var(--text-body);

        }

        & + input{
            margin-top: 1rem;
        }

    }
    .confirm{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: 2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 3rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }


    }

`;
export const TipoDeTransacao = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:0.5rem;

    
`

interface RadioBoxProps{
    isActive: boolean;
    activeColor:'green'|'red';
}
const colors ={
    green: '#33cc95',
    red:  '#e52e4d'
}
export const RadioBox = styled.button<RadioBoxProps>`
      height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props)=>props.isActive ? transparentize(0.9,colors[props.activeColor]) : 'transparent'};
        display: flex;
        align-items: center;
        justify-content: center;
        transition:border-color  0.5s;

        &:hover{
            border-color: #aaa;
        }
        img{
            width: 25px;
            height: 25px;
        }
        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`