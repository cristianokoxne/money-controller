import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionContext, TransactionProvider } from "./TransactionsContext";



export function App() {
 
  return (
    <TransactionProvider>
      <Header></Header>
      <Dashboard></Dashboard>
     
     <GlobalStyle></GlobalStyle>
    </TransactionProvider>
  );
}

