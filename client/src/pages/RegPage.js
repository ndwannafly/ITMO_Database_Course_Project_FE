import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import regImg from "../assets/active.png"
import {LOGIN_ROUTE, PIRATE_ROUTE, SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {login, reg} from "../http/userAPI";
import validator from "validator/es";


const RegPage = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {

        if (!validator.isEmail(document.getElementById("reg_email").value)) {
            document.getElementById("reg_err_msg").textContent = 'Некорректный email'

        } else if (document.getElementById("reg_pass").value !== document.getElementById("reg_pass1").value) {
            document.getElementById("reg_err_msg").textContent = "Не совпадают пароли"
        } else if (!validator.isStrongPassword(document.getElementById("reg_pass").value, {minSymbols: 0})) {
            document.getElementById("reg_err_msg").textContent = "Пароль должен сожержать минимум: одну прописную букву, одну заглавную букву, одну цифру. Длина должна быть неменьше 8 символов "
        } else if (false) {
            document.getElementById("reg_err_msg").textContent = 'You need to accept personal data processing policies!'
        } else {
            try {
                let data;
                data = await reg(email, password);
                const user1 = {email: email, password: password}
                user.setUser(user1)
                user.setIsAuth(true)
                localStorage.setItem('user', 'true')
                history.push(PIRATE_ROUTE)
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    }
    return (<Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 200}}>
        <Card style={{width: 500, marginTop: 80}} className="p-5">
            <h2 className="m-auto">Регистрация</h2>
            <Form className="d-flex flex-column">
                <h5 className="mt-0">E-mail</h5>
                <Form.Control className="mb-3" id="reg_email" placeholder="Введите ваш e-mail..."
                              type="email" onChange={e => setEmail(e.target.value)}></Form.Control>
                <h5>Придумайте пароль</h5>
                <Form.Control className="mb-3" id="reg_pass" placeholder="Введите ваш пароль..."
                              type="password" onChange={e => setPassword(e.target.value)}></Form.Control>
                <h5>Повторите пароль</h5>
                <Form.Control className="mb-3" id="reg_pass1" placeholder="Повторите ваш пароль..."
                              type="password"></Form.Control>
                <div style={{color: "red", fontSize: 20}} id="reg_err_msg"></div>

                <Button style={{borderColor: "black", backgroundColor: "white"}}
                        onClick={() => {
                            click()
                        }}><p className="align-self-center mt-3 mb-3"
                              style={{fontSize: 18, color: "black", textDecoration: "none"}} > Завершить регистрацию</p></Button>

                <Button style={{borderColor: "black", backgroundColor: "white", marginTop: 10}}
                        onClick={() => {
                            history.push(LOGIN_ROUTE)
                        }}><p className="align-self-center mt-3 mb-3"
                              style={{fontSize: 18, color: "black", textDecoration: "none"}} > У меня есть аккаунт</p></Button>
            </Form>
        </Card>
    </Container>);
});

export default RegPage;