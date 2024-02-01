import { useEffect, useState } from "react";


const Header=()=>{
    let [loginresult,SetLoginesult]=useState({
        Name:"",
        Email:""
      });
      const GetLoginResult=()=>{
        let Logindata=JSON.parse(window.sessionStorage.getItem("loginResult"));
        Logindata &&
        SetLoginesult({...loginresult,Email:Logindata.email,Name:Logindata.Name})
        }
        useEffect(()=>{
            GetLoginResult();
        },[1])
    

    return(
        <>
          
       
                <header className="navigation-bar">
        <p className="navigation-bar-logo">e!</p>
        <section className="navigation-bar-button">
            {
                loginresult.Name ? (
                    <>
            <div className="bg-light d-flex align-items-center rounded-5 px-3 py-2 text-danger ">
                <p className="fa-solid fa-user my-0 me-2"></p>
                <p className="m-0">{loginresult.Name}</p>
            </div>
            </>)
            :(
                <>
            <button className="navigation-bar-button-login" data-bs-toggle="modal" data-bs-target="#login">Login</button>
        <button className="navigation-bar-button-caccount" data-bs-toggle="modal" data-bs-target="#create-account">Create an account</button>
           </>) }</section>
    </header>
        </>
    );
};
export default Header;