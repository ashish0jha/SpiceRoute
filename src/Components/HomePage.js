import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../utils/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import LoginPage from './LoginPage';
import { baseUrl } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Footer from './Footer';

const HomePage = () => {
    const data = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkLogin = async(req,res)=>{
        try{
            const res = await axios.get(baseUrl+"/checklogin",{withCredentials:true});
            setUserName(res.data.fullName)
            dispatch(addUser(res.data))
        }
        catch(err) {
            if(err.status===401){
                navigate("/login")
            }
        }
    }
    useEffect(()=>{
        checkLogin();
    },[])
  return (
    <>
        <UserContext.Provider value={{ LoggedIn: userName, setUserName }}>
            <div id="container">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </UserContext.Provider>
    </>
  )
}

export default HomePage