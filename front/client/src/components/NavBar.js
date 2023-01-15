import React, {useContext} from 'react';
import {Button, Image, Nav, Navbar, NavItem} from "react-bootstrap";
import {

    PIRATE_ROUTE,

    LOGIN_ROUTE
} from "../utils/const";
import {NavLink, useHistory} from "react-router-dom";
import NavbarImg from "../assets/NavBarImg.webp"
import {Context} from "../index";
// import {BsFillCartFill} from "react-icons/bs"
import {observer} from "mobx-react-lite";
import {Badge} from "@nextui-org/react";
import {setFavorite} from "../http/userAPI";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()


    const logout = () => {

        user.setUser({})
        user.setIsAuth(false)
    }
    return (<Navbar bg="light" variant="light">
        <NavLink style={{color: 'white', marginLeft: 7}} to={PIRATE_ROUTE}><Image src={NavbarImg}/></NavLink>
        <Nav className="justify-content-center me-auto" style={{marginLeft: 15}}>


            <NavItem><Button variant="secondary" style={{marginRight: 10}} onClick={() => {
                history.push(PIRATE_ROUTE)
            }}>Пираты</Button></NavItem>


        </Nav>
        <Nav className="flex-column me-3">
            {!user.isAuth && <Button variant="secondary" onClick={() => {
                history.push(LOGIN_ROUTE)
            }}
                                     style={{width: 80}}>Вход</Button>}
            {user.isAuth && <div><Button variant="secondary" style={{marginLeft: 10}}
                                                            onClick={() => {
                                                                logout()
                                                            }}>Выход</Button></div>}
        </Nav>
    </Navbar>);
});

export default NavBar;