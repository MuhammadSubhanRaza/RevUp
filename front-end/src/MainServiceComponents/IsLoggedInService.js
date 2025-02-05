

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const IsLoggedInService = (props) => {


    let {Component} = props;

    const [allowAccess, setallowAccess] = useState(false);

    //------------ USE NAVIGATE

    const navigate = useNavigate()


     // -------------------- REDUX

     const myState = useSelector((state)=>state.SetTheProfileGlobal)


     function isloggedin()
     {
        if(myState==null)
        {
            navigate('/login')
        }
        else{
            isProfilePresent()
        }
     }

     function isProfilePresent()
     {
        if(myState.isProfilePresent == false)
        {
            navigate('/create-profile')
        }
        else{
            isProfileApproved()
        }
     }

     function isProfileApproved()
     {
        if(myState.isProfileApproved == false)
        {
            navigate('/underreview')
        }
        else{
            isProfileLocked()
        }
     }

     function isProfileLocked()
     {
        if(myState.isUserLocked==true)
        {
            navigate('/teporarilylocked')
        }
        else if(myState.isAdmin)
        {
            navigate('/admin/admindashboard')
        }
        else
        {
            setallowAccess(true)
        }
     }

    useEffect(() => {
        isloggedin()
    }, []);

  return (
    <>
        {allowAccess &&
            <Component/>
        }
    </>
    // <div></div>
  )
}

export default IsLoggedInService

