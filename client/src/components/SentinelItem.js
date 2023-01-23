import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";


import {Button, Card, Col, Image, Row} from "react-bootstrap";

import {useHistory} from "react-router-dom";
import {Context} from "../index";
import Update from "./modals/Update";
import {update} from "../http/updateAPI";
import {$host} from "../axiosAPI";

const sentinelItem = observer(({sentinelItam}) => {

    const history = useHistory()
    const [updateVisible, setUpdateVisible] = useState(false)
    const {user} = useContext(Context)
    const {sentinel} = useContext(Context)

    const reloadSentinel = () => {
        $host.get("/sentinelItam").then((response) => {
            sentinel.setSentinel(response.data)
        })
    }

    return (<Col md={4} style={{width: 500, margin: 4}}>
        <Row className="g-0">
            <div >
                <Card style={{width: 500, borderRadius: "15px", padding: 7}}>
                    <Row md={12}>
                        <Col md={4}><h3 style={{width: 160}}>{sentinelItam.name} </h3>
                            <Image
                                style={{borderRadius: "15px", width: 150, height: 150}}
                                src = {"https://i.pinimg.com/originals/fc/a9/a3/fca9a307c103a2cf5dc80cb23e142eb3.jpg"}/>
                            <h5>База: </h5>
                            <h5 style={{marginLeft: 15, fonkStyle: "oblique"}}>{sentinelItam.base}</h5>
                            <h5>Звание: </h5>
                            <h5 style={{marginLeft: 15}}>{sentinelItam.ranking} </h5>
                        </Col>
                        <Col md={8} >

                            <h5 style={{marginLeft: 25}}>Рост: {sentinelItam.height}</h5>
                            <h5 style={{marginLeft: 25}}>Возраст: {sentinelItam.age}</h5>
                            {sentinelItam.devilFruitsName !== "none" && <div style={{marginLeft: 25,  color: "red" }} >
                                <h5 > Дьявольский фрукт :</h5>
                                <h5 style={{marginLeft: 25}}> {sentinelItam.devilFruitsName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {sentinelItam.devilFruitsOwner}</h5>
                            </div>}
                            {sentinelItam.weaponName !== "none" && <div style={{marginLeft: 25,  color: "blueviolet" }} >
                                <h5 > Оружие :</h5>
                                <h5 style={{marginLeft: 25}}> {sentinelItam.weaponName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения: {sentinelItam.weaponOwner}</h5>
                            </div>}

                            {(sentinelItam.willArmament > 0 || sentinelItam.willObservation > 0 || sentinelItam.willRoyal > 0) && <div style={{marginLeft: 25,  color: "green" }} >
                                <h5 > Воля: </h5>
                                {sentinelItam.willArmament > 0 && <h5 style={{marginLeft: 25}}>Воля вооружения: {sentinelItam.willArmament}</h5>}
                                {sentinelItam.willObservation > 0 && <h5 style={{marginLeft: 25}}> Воля наблюдения: {sentinelItam.weaponOwner}</h5>}
                                {sentinelItam.willRoyal > 0 && <h5 style={{marginLeft: 25}}> Королевская воля: {sentinelItam.weaponOwner}</h5>}

                            </div>}
                            <div>
                                {user.isAuth && <Row>
                                    <Col>
                                        <Button sstyle={{display: 'flex', justifyContent: 'center', color: "gray"}}
                                                type={"button"}
                                                onClick={() => {
                                                    setUpdateVisible(true)
                                                    reloadSentinel()
                                                }
                                                }

                                        >
                                            Обновить значения
                                        </Button>
                                        <Update peopleId={sentinelItam.id} personName={sentinelItam.name} devilFruitName={sentinelItam.devilFruitsName} devilFruitId={sentinelItam.devilFruitId} weaponName={sentinelItam.weaponName} weaponId={sentinelItam.weaponId} show={updateVisible}
                                                onHide={() => setUpdateVisible(false)}></Update>
                                    </Col>
                                </Row>}
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