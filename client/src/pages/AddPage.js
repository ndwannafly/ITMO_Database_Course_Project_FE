import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AddPirate from "../components/modals/AddPirate";
import {Context} from "../index";
import AddSentinel from "../components/modals/AddSentinel";


const AddPage = () => {

    const [pirateVisible, setPirateVisible] = useState(false)
    const [sentinelVisible, setSentinelVisible] = useState(false)
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
    </Container>);
};

export default AddPage;