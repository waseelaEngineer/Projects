import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios';
import { UserContext } from './contexts/UserContext.js';

export default function AdminPrivateRoutes() {

    const [loading, setLoading] = useState(true);
    const {setAuth} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then(res => {
            if (res.status === 200) {
                setAuth(true);
            }
            setLoading(false);
        });
    }, []);

    axios.interceptors.response.use(undefined, function (err) {
        if (err.response.status === 401) {
            swal('Unauthorized', err.response.data.message, 'warning');
            localStorage.removeItem( 'auth_token');
            localStorage.removeItem( 'auth_name');
            navigate('/');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function(response){
        return response;
        }, function (error){
            if (error.response.status === 403) //Access Denied
            {
                swal('Forbidden', error.response.data.message,'warning');
                navigate('/');
            }
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(function(response){
        return response;
        }, function (error){
            if (error.response.status === 404){
                swal('Error', 'Page not found','warning');
            }
            return Promise.reject(error);
        }
    );

    if (loading){
      return <h1>Loading...</h1>
    }

    return (
        <>
        </>
    )
}