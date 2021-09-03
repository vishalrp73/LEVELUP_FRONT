import { useState, useEffect, useContext } from "react";

const Authenticate = () => {
    const [id, setId] = useState(localStorage.getItem('user_id'))
    const [user, setUser] = useState({});


    useEffect(() => {
        if (user) {
            fetch('http://localhost:4000/vishal')
            .then (response => response.json())
            .then (json => setUser(json[0]))
            .catch (err => console.log(err));
        } else {
            setUser(null)
        }

    }, []);

    return { user };
}

export default Authenticate;