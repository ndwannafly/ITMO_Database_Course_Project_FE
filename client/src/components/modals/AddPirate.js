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
                    ???????????????? ????????????
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ?????? ????????????"
                        type="text"
                    />
                    <Form.Control
                        onChange={e => setHeight(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ????????"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setBirthDate(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ???????? ????????????????"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setCaptureReward(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ????????????????????????????"
                        type="number"
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {teamName || "???????????????? ????????????????"}
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
                                ??????????????????
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
                        placeholder="?????????????? ?????????????????? ?? ????????????????"
                        type="text"
                    />

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {devilFruitName || "???????????????? ??????????"}
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
                                ??????????????????
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
                        placeholder="?????????????? ?????????????? ???????????????? ??????????????"
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
                            {weaponName || "???????????????? ????????????"}
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
                                ??????????????????
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
                        placeholder="?????????????? ?????????????? ???????????????? ??????????????"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillArmament(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ?????????????? ?????????? ????????????????????"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillObservation(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ?????????????? ?????????? ????????????????????"
                        type="number"
                    />

                    <Form.Control
                        onChange={e => setWillRoyal(e.target.value)}
                        className="mt-3"
                        placeholder="?????????????? ?????????????? ?????????? ????????????"
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>??????????????</Button>
                <Button variant="outline-success" onClick={() => {
                    submit()
                }}>????????????????</Button>
            </Modal.Footer>
        </Modal>
    );
});

export  default AddPirate;