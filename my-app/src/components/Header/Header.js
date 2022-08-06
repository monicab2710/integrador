import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Component logo opc 3.png";
import { HeaderStyled } from "./HeaderStyled";
import MenuButton from "../MenuButton.js/MenuButton";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const register = location.pathname.includes("/register");
  const logIn = location.pathname.includes("/logIn");


  const [open, setOpen] = useState(false);
 

  const handleClick = () => {
    setOpen(!open);
  };
 

  return (
    <>
    { logIn?
    <HeaderStyled>
     <Link to="/"><img src={logo} alt={"logo"} /></Link>
    <button onClick={() => navigate("/register")}> Crear cuenta</button>
    {console.log(logIn)}
    </HeaderStyled>
    
    :

    (register?
    <HeaderStyled> 

    <Link to="/"><img src={logo} alt={"logo"} /></Link>
    <button className="buttonLogIn" onClick={() => navigate("/logIn")}>Iniciar sesión</button></HeaderStyled>
    :
    <HeaderStyled>
    <Link to="/"><img src={logo} alt={"logo"} /></Link>
    <div className="containerButton">
    <button onClick={() => navigate("/register")}> Crear cuenta</button>
    <button className="buttonLogIn" onClick={() => navigate("/logIn")}>Iniciar sesión</button>
    </div></HeaderStyled>
     
     )}

     
     <NavBar open={open} />
     <MenuButton open={open} handleClick={handleClick} />

     

      <Outlet />
    </>
  );
};


export default Header;
