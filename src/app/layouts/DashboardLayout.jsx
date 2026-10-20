import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

const DashboardLayout = () => {


    let { mode }  = useSelector((store)=> store.theme);

    useEffect(()=> {
        if(mode === "light") {
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
        }
    },[mode])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DashboardLayout
