import styled from "styled-components";



export const NavbarWrapper = styled.nav`
  box-shadow: 1px 1px 2px 1px #d4d4d4;
  color: #263238;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 64%;
  height: 100vh;
  //transition: right 0.3s linear;

  #headerMenu{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #FBC02D;
  width: 100%;
  height: 20vh;
  position: relative;
}

#menu{
padding-right: 12px;
font-size: 24px;
position: relative;
font-weight: 700;
top: 61%;
color: #ffff;


}

#link{
  padding-top: 14px;
  padding-right: 12px;
}

#linkTwo{
  padding-top: 0px;
  padding-right: 12px;
}

a{
  color: #263238;
}

  @media only screen and (min-width: 641px) {
    display: none;
  }


`;

