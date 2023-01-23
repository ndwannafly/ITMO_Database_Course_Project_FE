import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {update} from "../../http/updateAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {$host} from "../../axiosAPI";
import {Context} from "../../index";

const Update = observer(({peopleId,devilFruitName, devilFruitId,weaponName, weaponId, personName ,show, onHide}) => {

    const [devilFruitOwner, setDevilFruitOwner] = useState('')
    const [devilFruit, setDevilFruit] = useState('');
    const [devilFruitNameNew, setDevilFruitName] = useState("")
    const [weapon, setWeapon] = useState('')
    const [weaponNameNew, setWeaponName] = useState('')
    const [weaponOwner, setWeaponOwner] = useState('')
    const [willArmament, setWillArmament] = useState('')
    const [willObservation, setWillObservation] = useState('')
    const [willRoyal, setWillRoyal] = useState('')

    const {sen} = useContext(Context)
    const {sentinel} = useContext(Context)
    const {devilFruitArray} = useContext(Context)


    const {weaponArray} = useContext(Context)
    const submit = () => {
        alert(peopleId)
        var df = ''
        var weap = ''
        if (devilFruitName === "none"){
            df = devilFruit


        } else{
            df = devilFruitId

        }

        if (weaponName === "none"){
            weap = weapon

        }else {
            weap = weaponId

        }

        update(peopleId, df, weap, weaponOwner, willArmament, willObservation, willRoyal, devilFruitOwner)
        onHide()
    }

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

    const reloadSentinel = () => {
        $host.get("/sentinel").then((response) => {
            sentinel.setSentinel(response.data)
        })
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
                    {weaponName !== "none" &&  <h5>
                        {weaponName}
                    </h5>
                    }
                    {weaponName === "none" && <Dropdown className="mt-2 mb-2"
                               placeholder='State'
                               fluid
                               multiple
                               search
                               selection
                    >
                        <Dropdown.Toggle>
                            {weaponNameNew || "Выберите Оружие"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{
                                overflowY: 'scroll',
                                maxHeight: 300
                            }}
                        >
                            <Dropdown.Item
                                style={{color: "red"}}
                                onClick={() => {
                                    setWeapon('')
                                    setWeaponName('')
                                }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {weaponArray.weapon.map(weapon => ((weapon.name !== "none") &&
                                <Dropdown.Item onClick={() => {
                                    setWeapon(weapon.id)
                                    setWeaponName(weapon.name)
                                }}>
                                    {weapon.name}
                                </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>
                    }

                    <Form.Control s

                        onChange={e => setWeaponOwner(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения оружием"
                        type="text"
                    />


                    {devilFruitName !== "none" && <h5 style={{marginTop: 15}}>

                        {devilFruitName}
                    </h5>}

                    {devilFruitName === "none" && <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {devilFruitNameNew || "Выберите фрукт"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{
                                overflowY: 'scroll',
                                maxHeight: 300
                            }}
                        >
                            <Dropdown.Item
                                style={{color: "red"}}
                                onClick={() => {
                                    setDevilFruit('')
                                    setDevilFruitName('')
                                }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {devilFruitArray.devilFruit.map(fruit => ((fruit.name !== "none") &&
                                <Dropdown.Item key={fruit.id} onClick={() => {
                                    setDevilFruit(fruit.id)
                                    setDevilFruitName(fruit.name)
                                }
                                }>
                                    {fruit.name}
                                </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>}
                    <Form.Control

                        onChange={e => setDevilFruitOwner(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения фруктом"
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setWillArmament(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения волей вооружения"
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setWillObservation(e.target.value)}
                        className="mt-3"
                        placeholder="Введите уровень владения волей наблюдения "
                        type="text"
                    />
                    <Form.Control

                        onChange={e => setWillRoyal(e.target.value)}
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
                    reloadSentinel()
                    sentinel.sentinel.map(s => {
                        if (s.id === sen.sen.id) sen.setSen(s)
                    })
                    window.location.reload();
                }}>Обновить</Button>
            </Modal.Footer>
        </Modal>

    );


});

export default Update;