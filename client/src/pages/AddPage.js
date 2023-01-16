import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AddPirate from "../components/modals/AddPirate";
import AddTeam from "../components/modals/AddTeam";
import {Context} from "../index";
import AddSentinel from "../components/modals/AddSentinel";
import AddFruit from "../components/modals/AddFruit";


const AddPage = () => {

    const [pirateVisible, setPirateVisible] = useState(false)
    const [sentinelVisible, setSentinelVisible] = useState(false)
    const [teamVisible, setTeamVisible] = useState(false)
    const [fruitVisible, setFruitVisible] = useState(false)
    return(<Container>
        <Row>
            <Col>
                <Button type={"button"}
                    onClick={() => setPirateVisible(true)}
                >
                    Добавить Пирата
                </Button>
                <AddPirate show={pirateVisible} onHide={() => setPirateVisible(false)}></AddPirate>
            </Col>
        </Row>
        <Row>
        <Col>
                <Button type={"button"}
                        onClick={() => setSentinelVisible(true)}
                >
                    Добавить Дозоного
                </Button>
                <AddSentinel show={sentinelVisible} onHide={() => setSentinelVisible(false)}></AddSentinel>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button type={"button"}
                        onClick={() => setTeamVisible(true)}
                >
                    Добавить Команду
                </Button>
                <AddTeam show={teamVisible} onHide={() => setTeamVisible(false)}></AddTeam>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button type={"button"}
                        onClick={() => setFruitVisible(true)}
                >
                    Добавить Фрукт
                </Button>
                <AddFruit show={fruitVisible} onHide={() => setFruitVisible(false)}></AddFruit>
            </Col>
        </Row>
    </Container>);
};

export default AddPage;