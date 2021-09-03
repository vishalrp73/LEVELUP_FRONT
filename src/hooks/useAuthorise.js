import { useState, useEffect, useContext } from "react";
import axios from 'axios';

const Authenticate = () => {
    const [id, setId] = useState(localStorage.getItem('user_id'))
    const [user, setUser] = useState();


    useEffect(() => {
        axios.post('http://localhost:4000/auth', {
            id: id
        })
        .then (response => {
            setUser(response.data[0])
        })
    }, [])

    return { user };
}

export default Authenticate;