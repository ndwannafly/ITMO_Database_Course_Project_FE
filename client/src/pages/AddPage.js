import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AddPirate from "../components/modals/AddPirate";
import AddTeam from "../components/modals/AddTeam";
import {Context} from "../index";
import AddSentinel from "../components/modals/AddSentinel";
import AddFruit from "../components/modals/AddFruit";
import AddWeapon from "../components/modals/AddWeapon";
import {$host} from "../axiosAPI";
import {addSentinel} from "../http/sentinelAPI";


const AddPage = () => {

    const [pirateVisible, setPirateVisible] = useState(false)
    const [sentinelVisible, setSentinelVisible] = useState(false)
    const [teamVisible, setTeamVisible] = useState(false)
    const [fruitVisible, setFruitVisible] = useState(false)
    const [weaponVisible, setWeaponVisible] = useState(false)
    const {devilFruitArray} = useContext(Context)
    const {user} = useContext(Context)
    useEffect(() => {
        user.setUser(localStorage.getItem('user'))

    })
    const {weaponArray} = useContext(Context)
    const {team} = useContext(Context)
    const click = () => {
        $host.get("/team").then((response) => {
            team.setTeam(response.data)
        })


        $host.get("/devilFruit").then((response) => {
            devilFruitArray.setDevilFruit(response.data)
        })


        $host.get("/weapon").then((response) => {
            weaponArray.setWeapon(response.data)
        })

    }
    return(<Container>

        <Row style = {{margin: 10}}>
            <Button type={"button"}
                    onClick={() => {

                        click()

                        setPirateVisible(true)
                    }}
                >
                    Добавить Пирата
                </Button>
                <AddPirate show={pirateVisible} onHide={() => setPirateVisible(false)}></AddPirate>

        </Row>
        <Row style = {{margin: 10}}>

                <Button type={"button"}
                        onClick={() => {

                            click()
                            setSentinelVisible(true)
                        }}
                >
                    Добавить Дозоного
                </Button>
                <AddSentinel show={sentinelVisible} onHide={() => setSentinelVisible(false)}></AddSentinel>

        </Row>


        <Row style = {{margin: 10}}>

                <Button type={"button"}
                        onClick={() => setTeamVisible(true)}
                >
                    Добавить Команду
                </Button>
                <AddTeam show={teamVisible} onHide={() => setTeamVisible(false)}></AddTeam>

        </Row>
        <Row style = {{margin: 10}}>

                <Button type={"button"}
                        onClick={() => setFruitVisible(true)}
                >
                    Добавить Фрукт
                </Button>
                <AddFruit show={fruitVisible} onHide={() => setFruitVisible(false)}></AddFruit>

        </Row>
        <Row style = {{margin: 10}}>

                <Button type={"button"}
                        onClick={() => setWeaponVisible(true)}
                >
                    Добавить Оружие
                </Button>
                <AddWeapon show={weaponVisible} onHide={() => setWeaponVisible(false)}></AddWeapon>

        </Row>
    </Container>);
};

export default AddPage;