import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";


interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
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
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <thead>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}