import { createContext, useEffect, useState, ReactNode} from "react";
import { api } from "./services/api";



interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
interface TransactionInput{
    title: string;
    amount: number;
    type: string;
    category: string;
}
interface TransactionsProviderProps{
    children: ReactNode;
}
interface TransactionsData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionsData>({} as TransactionsData);


export function TransactionProvider({children}: TransactionsProviderProps ){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transacoes')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput){
        

        api.post('/transactions', transaction);

    }
    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}