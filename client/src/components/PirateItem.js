import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";

import {Button, Card, Col, Dropdown, Form, Image, Row, Modal, Container} from "react-bootstrap";
import {$host} from "../axiosAPI";
import {PRODUCT_ROUTE} from "../utils/const";
import {useHistory} from "react-router-dom";
import {Text} from "@nextui-org/react";
import AddWeapon from "./modals/AddWeapon";
import Update from "./modals/Update";
import {Context} from "../index";

const PirateItem = observer(({pirate}) => {

    const history = useHistory()
    const [updateVisible, setUpdateVisible] = useState(false)
    const {user} = useContext(Context)
    // useEffect(() => {
    //     $host.get('/pirate/' + pirate.id).then((response) => {
    //         setProd(response.data)
    //     })
    // }, [])

    return (<Col md={4} style={{width: 500, margin: 2}}>
        <Row className="g-0">
            <div >
                <Card style={{width: 500, borderRadius: "15px", padding: 7}}>
                    <Row md={12}>
                        <Col md={4}><h3 style={{width: 160}}>{pirate.name} </h3>
                            <Image
                                style={{borderRadius: "15px", width: 150, height: 150}}
                                src = {pirate.img}/>
                            <h5>Команда: </h5>
                            <h5 style={{marginLeft: 15, fonkStyle: "oblique"}}>{pirate.nameTeam}</h5>
                            <h5>Должность: </h5>
                            <h5 style={{marginLeft: 15}}>{pirate.title} </h5>
                        </Col>
                        <Col md={8} >
                            <h5 style={{marginLeft: 25}}>Цена: {pirate.captureReward}</h5>
                            <h5 style={{marginLeft: 25}}>Рост: {pirate.height}</h5>
                            <h5 style={{marginLeft: 25}}>Возраст: {pirate.date}</h5>
                            {pirate.devilFruitsName !== "none" && <div style={{marginLeft: 25,  color: "red" }} >
                                <h5 > Дьявольский фрукт :</h5>
                                <h5 style={{marginLeft: 25}}> {pirate.devilFruitsName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {pirate.devilFruitsOwner}</h5>
                            </div>}
                            {pirate.weaponName !== "none" && <div style={{marginLeft: 25,  color: "blueviolet" }} >
                                <h5 > Оружие :</h5>
                                <h5 style={{marginLeft: 25}}> {pirate.weaponName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {pirate.weaponOwner}</h5>
                            </div>}

                            {(pirate.willArmament > 0 || pirate.willObservation > 0 || pirate.willRoyal > 0) && <div style={{marginLeft: 25,  color: "green" }} >
                                <h5 > Воля: </h5>
                                {pirate.willArmament > 0 && <h5 style={{marginLeft: 25}}>Воля вооружения: {pirate.willArmament}</h5>}
                                {pirate.willObservation > 0 && <h5 style={{marginLeft: 25}}> Воля наблюдения: {pirate.willObservation}</h5>}
                                {pirate.willRoyal > 0 && <h5 style={{marginLeft: 25}}> Королевская воля: {pirate.willRoyal}</h5>}

                            </div>}
                            <div>
                                <Row>
                                    {user.isAuth && <Col>
                                        <Button sstyle={{display: 'flex', justifyContent: 'center', color: "gray"}}
                                                type={"button"}
                                                onClick={() => setUpdateVisible(true)}
                                        >
                                            Обновить значения
                                        </Button>
                                        <Update  peopleId={pirate.id} personName={pirate.name} devilFruitName={pirate.devilFruitsName} devilFruitId={pirate.devilFruitId} weaponName={pirate.weaponName} weaponId={pirate.weaponId}  onHide={() => setUpdateVisible(false)}  show={updateVisible}>
                                    </Update>
                                    </Col>}
                                </Row>
                            </div>

                        {/*{list.map((key) => (<Text h6 size="$md" style={{cursor: "pointer", color: "blue"}}*/}
                        {/*                          onClick={() => history.push(PRODUCT_ROUTE + '/' + key[0])}>{key[1]}</Text>))}*/}
                        </Col>
                    </Row>


                </Card>
            </div>
        </Row>
    </Col>);
});

export default PirateItem;