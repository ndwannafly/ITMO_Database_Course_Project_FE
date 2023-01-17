import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {addFruit} from "../../http/fruitTypeAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {$host} from "../../axiosAPI";
import {Context} from "../../index";

const Update = observer(({peopleId,devilFruitName, devilFruitId,weaponName, personName ,show, onHide}) => {
    const [fruitName, setFruitName] = useState('')
    const [fruitType, setFruitType] = useState('')
    const [fruitDesc, setFruitDesc] = useState('')
    const [type, setType]= useState('')

    const submit = () => {
        addFruit(fruitName, fruitDesc, fruitType)
        onHide()
    }


    return(
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Обновление значений
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <h3>{personName}</h3>
                    <h5>
                        {weaponName}
                    </h5>

                    <Form.Control

                        onChange={e => setFruitName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения оружием"
                        type="text"
                    />
                    <h5>

                        {devilFruitName}
                    </h5>
                    <Form.Control

                        onChange={e => setFruitDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения фруктом"
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setFruitDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения волей вооружения"
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setFruitDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения волей наблюдения "
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setFruitDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения королеской волей"
                        type="text"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => {
                    submit()
                }}>Обновить</Button>
            </Modal.Footer>
        </Modal>

    );


});

export default Update;