import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}
//Maneira 1 (não muito recomendada):
//const TransactionContext = createContext<TransactionContextType>({
//    trasactions:[];
//})

//MNANEIRA 2 => SEM PRECISAR PASSAR VALORES PELO OBJETO... UTILIZAMOS PROVIDERS PARA PASSAR OS VALORES.

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const reponse = await fetch('http://localhost:3000/trasactions')
        const data = await reponse.json();
        setTransactions(data);
        //console.log(data)
    }
    // USANDO USEEFFECT PARA REALIZAR UMA CHAMADA NA API
    //useEffect(() => {
    //    fetch('http://localhost:3000/transactions')
    //        .then(response => response.json())
    //        .then(data => {
    //            console.log(data)
    //        })
    //}, [])

    useEffect(() => {
        loadTransactions();
    }, [])
    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}