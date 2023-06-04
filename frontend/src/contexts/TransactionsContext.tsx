import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

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
    fetchTransactions: (query?: string) => Promise<void>;
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

    async function fetchTransactions( query?:string ) {
        const response = await api.get('/transactions',{
            params: {
                q: query,
            }
        })
        
        setTransactions(response.data);
    // const url = new URL('/transactions')

    // if (query){
    //     url.searchParams.append('q', query)
    //  }
    //  const reponse = await fetch(url)
    //  const data = await reponse.json();
    //  setTransactions(data);
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
        fetchTransactions();
    }, [])
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}