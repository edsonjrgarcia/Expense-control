import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
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
                        <tr>
                            <td>Web page development</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Sell</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td>Internet</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 350,00
                                </PriceHighLight>
                            </td>
                            <td>Home</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}