import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import fishImg from "../assets/fish.webp"

import {Button, Card, Col, Dropdown, Form, Image, Row, Modal, Container} from "react-bootstrap";
import {$host} from "../axiosAPI";
import {PRODUCT_ROUTE} from "../utils/const";
import {useHistory} from "react-router-dom";
import {Text} from "@nextui-org/react";
import AddWeapon from "./modals/AddWeapon";
import Update from "./modals/Update";

const sentinelItem = observer(({sentinel}) => {

    const history = useHistory()
    const [updateVisible, setUpdateVisible] = useState(false)
    // useEffect(() => {
    //     $host.get('/sentinel/' + sentinel.id).then((response) => {
    //         setProd(response.data)
    //     })
    // }, [])

    return (<Col md={4} style={{width: 500, margin: 4}}>
        <Row className="g-0">
            <div >
                <Card style={{width: 500, borderRadius: "15px", padding: 7}}>
                    <Row md={12}>
                        <Col md={4}><h3 style={{width: 160}}>{sentinel.name} </h3>
                            <Image
                                style={{borderRadius: "15px", width: 150, height: 150}}
                                src = {"https://i.pinimg.com/originals/fc/a9/a3/fca9a307c103a2cf5dc80cb23e142eb3.jpg"}/>
                            <h5>База: </h5>
                            <h5 style={{marginLeft: 15, fonkStyle: "oblique"}}>{sentinel.base}</h5>
                            <h5>Звание: </h5>
                            <h5 style={{marginLeft: 15}}>{sentinel.ranking} </h5>
                        </Col>
                        <Col md={8} >

                            <h5 style={{marginLeft: 25}}>Рост: {sentinel.height}</h5>
                            <h5 style={{marginLeft: 25}}>Возраст: {sentinel.age}</h5>
                            {sentinel.devilFruitsName !== "none" && <div style={{marginLeft: 25,  color: "red" }} >
                                <h5 > Дьявольский фрукт :</h5>
                                <h5 style={{marginLeft: 25}}> {sentinel.devilFruitsName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {sentinel.devilFruitsOwner}</h5>
                            </div>}
                            {sentinel.weaponName !== "none" && <div style={{marginLeft: 25,  color: "blueviolet" }} >
                                <h5 > Оружие :</h5>
                                <h5 style={{marginLeft: 25}}> {sentinel.weaponName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {sentinel.weaponOwner}</h5>
                            </div>}

                            {(sentinel.willArmament > 0 || sentinel.willObservation > 0 || sentinel.willRoyal > 0) && <div style={{marginLeft: 25,  color: "green" }} >
                                <h5 > Воля: </h5>
                                {sentinel.willArmament > 0 && <h5 style={{marginLeft: 25}}>Воля вооружения: {sentinel.willArmament}</h5>}
                                {sentinel.willObservation > 0 && <h5 style={{marginLeft: 25}}> Воля наблюдения: {sentinel.weaponOwner}</h5>}
                                {sentinel.willRoyal > 0 && <h5 style={{marginLeft: 25}}> Королевская воля: {sentinel.weaponOwner}</h5>}

                            </div>}
                            <div>
                                <Row>
                                    <Col>
                                        <Button sstyle={{display: 'flex', justifyContent: 'center', color: "gray"}} type={"button"}
                                                onClick={() => setUpdateVisible(true)}
                                        >
                                            Обновить значения
                                        </Button>
                                        <Update weaponName={sentinel.weaponName} devilFruitId={sentinel.devilFruitsName} devilFruitName={sentinel.devilFruitsName} peopleId={sentinel.personId} personName={sentinel.name} show={updateVisible} onHide={() => setUpdateVisible(false)}></Update>
                                    </Col>
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

export default sentinelItem;