import React from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";


import PirateItem from "./PirateItem";

const PirateList = observer(({pirate}) => {
    return (<Row className="g-0 justify-content-center" style={{display: 'flex'}}>
        {pirate.map(pirate => <PirateItem key={pirate.id} pirate={pirate}/>)}
    </Row>);
});

export default PirateList;