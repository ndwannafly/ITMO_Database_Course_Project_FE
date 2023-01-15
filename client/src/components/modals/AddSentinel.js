import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {addFish} from "../../http/fishAPI";
import {Context} from "../../index";
import {$host} from "../../axiosAPI";
import PirateItem from "../PirateItem";



const AddSentinel = observer(({ show, onHide}) => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('');
    const [birthDate, setBirthDate] = useState('');
    // const [teamName, setTeamName] = useState('');
    const [ranking, setRanking] = useState('');
    const [devilFruit, setDevilFruit] = useState('');
    const [devilFruitOwner, setDevilFruitOwner] = useState('');
    const [weapon, setWeapon] = useState('')
    const [weaponOwner, setWeaponOwner] = useState('')
    const [willArmament, setWillArmament] = useState('')
    const [willObservation, setWillObservation] = useState('')
    const [willRoyal, setWillRoyal] = useState('')
    const {rankingArray} = useContext(Context)
    const {devilFruitArray} = useContext(Context)

    const submit = () => {
        addFish(name, height, birthDate,ranking, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal)
        onHide()
    }

    useEffect(() => {
        $host.get("/ranking").then((response) => {
            ranking.setTeam(response.data)
        })
    }, [])

    useEffect(() => {
        $host.get("/devilFruit").then((response) => {
            devilFruitArray.setDevilFruit(response.data)
        })
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить Дозорного
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите имя пирата"
                        type="text"
                    />
                    <Form.Control
                        onChange={e => setHeight(e.target.value)}
                        className="mt-3"
                        placeholder="Введите рост"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setBirthDate(e.target.value)}
                        className="mt-3"
                        placeholder="Введите дату рождения"
                        type="text"
                    />

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Выберите Звание
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {rankingArray.ranking.map(ranking => (<Dropdown.Item onClick={() => setRanking(ranking.name)}>
                                {ranking.name}
                            </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Выберите фрукт
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devilFruitArray.devilFruit.map(fruit => (<Dropdown.Item onClick={() => setDevilFruit(fruit.name)}>
                                {fruit.name}
                            </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>
                    <Form.Control
                        onChange={e => setDevilFruitOwner(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения фруктом"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWeapon(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название оружия"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setWeaponOwner(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения оружием"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillArmament(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень волей вооружения"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillObservation(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень волей наблюдения"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillRoyal(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень волей короля"
                        type="number"
                    />











                </Form>
            </Modal.Body>
        </Modal>
    );


});

export  default AddSentinel;