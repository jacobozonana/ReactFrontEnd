import React, { useEffect, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext"

import axios from 'axios';
import { useContext } from 'react';

function UsersList() {
    const [users, setUsers] = useState([])
    const { token } = useContext(AuthContext)
    const URL_GET_USERS = 'http://localhost:8080/api/v1/users'
    useEffect(()=>{
        axios.get(URL_GET_USERS, {
            headers:{
            Authorization : `Bearer:${localStorage.getItem("app_token")}`,
            },
        }) 
        .then ((data) => setUsers(data.data))
        .catch((err)=> console.log(err));
    },[]);
    
    return (
        <>
        <ul>
            {users.map((user) => (
                <li>{user.firt_name}</li>
            ))}
        </ul>
        </>
    )
}

export default UsersList
