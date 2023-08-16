import { useRef } from "react";

interface SearchFormProps {
    searchUserHandler: (value: string) => Promise<void>
 
}

const SearchForm = ({ searchUserHandler}: SearchFormProps) => {
    let usernameInputRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (usernameInputRef && usernameInputRef.current) {
            searchUserHandler(usernameInputRef.current.value);
            usernameInputRef.current.value = ""
        }
       
    };


    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Search GitHub users!</h1>
            <label htmlFor='username'>Enter a username: </label>
            <input id='username' ref={usernameInputRef} />
            <button type='submit'>Search</button>
        </form>)
}

export default  SearchForm 