import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import {Button, Form, Row, Col} from "react-bootstrap";
import {addPirate} from "../../http/pirateAPI";
import {Context} from "../../index";
import {$host} from "../../axiosAPI";
import PirateItem from "../PirateItem";
import {Dropdown} from "react-bootstrap";


const AddPirate = observer(({ show, onHide}) => {
    const [teamName, setTeamName] = useState('')
    const [weaponName, setWeaponName] = useState('')
    const [devilFruitName, setDevilFruitName] = useState("")
    const [name, setName] = useState('')
    const [height, setHeight] = useState('');
    const [birthDate, setBirthDate] = useState('');
    // const [teamName, setTeamName] = useState('');
    const [captureReward, setCaptureReward] = useState('');
    const [teamID, setTeamId] = useState('');
    const [title, setTitle] = useState('');
    const [devilFruit, setDevilFruit] = useState('');
    const [devilFruitOwner, setDevilFruitOwner] = useState('');
    const [weapon, setWeapon] = useState('')
    const [weaponOwner, setWeaponOwner] = useState('')
    const [willArmament, setWillArmament] = useState('')
    const [willObservation, setWillObservation] = useState('')
    const [willRoyal, setWillRoyal] = useState('')
    const {team} = useContext(Context)
    const {devilFruitArray} = useContext(Context)

    const {weaponArray} = useContext(Context)
    const submit = () => {

        addPirate(name, height, birthDate, captureReward, parseInt(teamID), title, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal)
        onHide()
    }

    useEffect(() => {
        $host.get("/team").then((response) => {
            team.setTeam(response.data)
        })
    }, [])

    useEffect(() => {
        $host.get("/devilFruit").then((response) => {
            devilFruitArray.setDevilFruit(response.data)
        })
    }, [])


    useEffect(() => {
        $host.get("/weapon").then((response) => {
            weaponArray.setWeapon(response.data)
        })
    }, [])



    return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить Пирата
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

                    <Form.Control
                        onChange={e => setCaptureReward(e.target.value)}
                        className="mt-3"
                        placeholder="Введите вознаграждение"
                        type="number"
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {teamName || "Выберите Комманду"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: 300}}>
                            <Dropdown.Item
                                style = {{color: "red"}}
                                onClick={() => {
                                    setTeamId('')
                                    setTeamName('')
                                }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {team.team.map(team => (<Dropdown.Item onClick={() => {
                                setTeamId(team.id)
                                setTeamName(team.name)
                            }}>
                                {team.name}
                            </Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите должность в комманде"
                        type="text"
                    />

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {devilFruitName || "Выберите фрукт"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{overflowY: 'scroll',
                                maxHeight: 300}}
                        >
                            <Dropdown.Item
                                style = {{color: "red"}}
                                onClick={() => {
                                        setDevilFruit('')
                                        setDevilFruitName('')
                                    }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {devilFruitArray.devilFruit.map(fruit => ((fruit.name!== "none") &&<Dropdown.Item key={fruit.id} onClick={() =>
                            {
                                setDevilFruit(fruit.id)
                                setDevilFruitName(fruit.name)
                            }
                            }>
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

                    <Dropdown className="mt-2 mb-2"
                              placeholder='State'
                              fluid
                              multiple
                              search
                              selection
                    >
                        <Dropdown.Toggle>
                            {weaponName || "Выберите Оружие"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{overflowY: 'scroll',
                                maxHeight: 300}}
                        >
                            <Dropdown.Item
                                style = {{color: "red"}}
                                onClick={() => {
                                    setWeapon('')
                                    setWeaponName('')
                                }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {weaponArray.weapon.map(weapon => ((weapon.name !== "none") && <Dropdown.Item onClick={() => {
                                setWeapon(weapon.id)
                                setWeaponName(weapon.name)
                            }}>
                                {weapon.name}
                            </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>

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
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => {
                    submit()
                }}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export  default AddPirate;