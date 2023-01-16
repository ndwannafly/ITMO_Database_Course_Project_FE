import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {addWeapon} from "../../http/weaponAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {$host} from "../../axiosAPI";
import {Context} from "../../index";

const AddWeapon = observer(({ show, onHide}) => {
    const [weaponName, setWeaponName] = useState('')

    const [weaponDesc, setWeaponDesc] = useState('')

    const submit = () => {
        addWeapon(weaponName, weaponDesc)

        onHide()
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить Оружие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setWeaponName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название оружия"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setWeaponDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание оружия"
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

export default AddWeapon;