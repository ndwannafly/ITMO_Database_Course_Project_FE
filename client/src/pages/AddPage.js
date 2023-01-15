import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AddPirate from "../components/modals/AddPirate";
import {Context} from "../index";


const AddPage = () => {
    const {pirate} = useContext(Context)
    const [pirateVisible, setPirateVisible] = useState(false)
    return(<Container>
        <Row>
            <Col>
                <Button type={"button"}
                    onClick={() => setPirateVisible(true)}
                >
                    Добавить Пирата
                </Button>
                <AddPirate pirate = {pirate} show={pirateVisible} onHide={() => setPirateVisible(false)}></AddPirate>
            </Col>
        </Row>
    </Container>);
};

export default AddPage;