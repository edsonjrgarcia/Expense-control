import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

async function handleSearchTransaction(data: SearchFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(data)
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input 
                type="text" 
                placeholder="Search by transactions"
                {...register('query')}
            />
            <button 
                type="submit"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} />
                Search
            </button>
        </SearchFormContainer>
    )
}