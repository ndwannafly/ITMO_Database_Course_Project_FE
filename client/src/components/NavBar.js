import React, {useContext, useEffect} from 'react';
import {Button,  Nav, Navbar, NavItem} from "react-bootstrap";
import {

    PIRATE_ROUTE,
    SENTINEL_PAGE,
    LOGIN_ROUTE,
    ADD_PAGE
} from "../utils/const";
import {useHistory} from "react-router-dom";

import {Context} from "../index";

import {observer} from "mobx-react-lite";
import {$host} from "../axiosAPI";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('user') === 'true'){
            user.setIsAuth(true)
        }


    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.setItem('user', 'false')
        user.setUser({})
        user.setIsAuth(false)

    }
    return (<Navbar bg="light" variant="light">
        
        <Nav className="justify-content-center me-auto" style={{marginLeft: 15}}>


            <NavItem><Button variant="secondary" style={{marginRight: 10}} onClick={() => {
                history.push(PIRATE_ROUTE)
            }}>Пираты</Button></NavItem>
            {user.isAuth && <NavItem><Button variant="secondary" style={{marginRight: 10}} onClick={() => {
                history.push(ADD_PAGE)
            }}>Добавить</Button></NavItem>}
            <NavItem><Button variant="secondary" style={{marginRight: 10}} onClick={() => {
                history.push(SENTINEL_PAGE)
            }}>Дозорные</Button></NavItem>

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