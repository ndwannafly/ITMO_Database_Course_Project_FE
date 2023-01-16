import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {addTeam} from "../../http/teamAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";

const AddTeam = observer(({ show, onHide}) => {
    const [teamName, setTeamName] = useState('')
    const [shipName, setShipName] = useState('')
    const [imgLink, setImgLink] = useState('')

    const submit = () => {
        addTeam(teamName, shipName, imgLink)
        onHide()
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить Команду
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setTeamName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название команды"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setShipName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название корабля"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setImgLink(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ссылку на картинку команды"
                        type="text"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => {
                    submit()
                }}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );


});

export default AddTeam;