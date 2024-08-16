import { useState } from "react";
import Message from "./Message";

const Form = () => {
    const [person, setPerson] = useState({
        name: "",
        favoriteMovie: ""
    });
    console.log(person);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeName = (e) => {
        setPerson({ ...person, name: e.target.value });
    };

    const handleChangeFavoriteMovie = (e) => {
        setPerson({ ...person, favoriteMovie: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            person.name.trim().length >= 3 &&
            person.favoriteMovie.trim().length >= 6 
        ) {
            setShow(true);
            setError(false);
        } else {
            setShow(false);
            setError(true);
        }
    };

    const reset = () => { 
        setPerson({
            name: "",
            favoriteMovie: "",
        });
        setShow(false);
        setError(false);
    };


    return (
        <>
            {show ? (
                <Message person={person} />
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre: </label>
                        <input type="text" value={person.name} onChange={handleChangeName} />
                        <label>Película Favorita: </label>
                        <input type="text" value={person.favoriteMovie} onChange={handleChangeFavoriteMovie} />
                        <button type='submit'>Enviar</button>
                    </form>
                    {show ? <Message name={person.name} email={person.favorite} /> : null}
                    <button onClick={reset}>Reset form</button>
                </>
            )}
            {error ? (<h4 style={{ color: "red" }}>Error: Por favor chequea que la información sea correcta</h4>
            ) : null}
        </>
    );
}

export default Form;