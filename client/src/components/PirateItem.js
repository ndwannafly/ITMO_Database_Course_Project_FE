import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import fishImg from "../assets/fish.webp"
import pirateImg from "../assets/1pirateTeam.png"
import {Card, Col, Image, Row} from "react-bootstrap";
import {$host} from "../axiosAPI";
import {PRODUCT_ROUTE} from "../utils/const";
import {useHistory} from "react-router-dom";
import {Text} from "@nextui-org/react";

const PirateItem = observer(({pirate}) => {
    const [prod, setProd] = useState({})
    const history = useHistory()
    // useEffect(() => {
    //     $host.get('/pirate/' + pirate.id).then((response) => {
    //         setProd(response.data)
    //     })
    // }, [])
    const list = Object.entries(prod)
    return (<Col md={4} style={{width: 500, margin: 4}}>
        <Row className="g-0">
            <div id="productCard">
                <Card style={{width: 500, borderRadius: "15px", padding: 7}}>
                    <Row md={12}>
                        <Col md={4}><h3 style={{width: 160}}>{pirate.name} </h3>
                            <Image
                                style={{borderRadius: "15px", width: 150, height: 150}}
                                src = {pirate.img}/>
                            <h5>Команда:</h5>
                            <h5 style={{marginLeft: 15}}>{pirate.nameTeam}</h5>
                            <h5>Должность: </h5>
                            <h5 style={{marginLeft: 15}}>{pirate.title} </h5>
                        </Col>
                        <Col md={8} >
                            <h5 style={{marginLeft: 25}}>Цена :{pirate.captureReward}</h5>
                            <h5 style={{marginLeft: 25}}>Рост :{pirate.height}</h5>
                            <h5 style={{marginLeft: 25}}>Дата рождения :{pirate.date}</h5>
                            {pirate.devilFruitsName !== "none" && <div style={{marginLeft: 25,  color: "red" }} >
                                <h5 > Дьявольский фрукт :</h5>
                                <h5 style={{marginLeft: 25}}> {pirate.devilFruitsName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения :{pirate.devilFruitsOwner}</h5>
                            </div>}
                            {pirate.weaponName !== "none" && <div style={{marginLeft: 25,  color: "blueviolet" }} >
                                <h5 > Оружие :</h5>
                                <h5 style={{marginLeft: 25}}> {pirate.weaponName}</h5>
                                <h5 style={{marginLeft: 25}}> Уровень владения :{pirate.weaponOwner}</h5>
                            </div>}

                            {(pirate.willArmament > 0 || pirate.willObservation > 0 || pirate.willRoyal > 0) && <div style={{marginLeft: 25,  color: "green" }} >
                                <h5 > Воля :</h5>
                                {pirate.willArmament > 0 && <h5 style={{marginLeft: 25}}>Воля вооружения: {pirate.willArmament}</h5>}
                                {pirate.willObservation > 0 && <h5 style={{marginLeft: 25}}> Воля наблюдения :{pirate.weaponOwner}</h5>}
                                {pirate.willRoyal > 0 && <h5 style={{marginLeft: 25}}> Королевская воля :{pirate.weaponOwner}</h5>}

                            </div>}

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