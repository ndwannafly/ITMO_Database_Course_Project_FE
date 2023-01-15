import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {$host} from "../axiosAPI";
import {Col, Row} from "react-bootstrap";
import Pagination from "../components/Pagination";

import PirateList from "../components/PirateList";

const PiratePage = observer(() => {
    const {pirate} = useContext(Context)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = pirate.pirate.slice(firstPostIndex, lastPostIndex)
    useEffect(() => {

        $host.get("/pirate").then((response) => {
            pirate.setPirate(response.data)
        })

    }, [])

    return (<Row className="g-0">
        <Col md={12} className="align-self-center">
            <Pagination totalPosts={pirate.pirate.length} postsPerPages={postsPerPage}
                        setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <PirateList pirate={currentPosts}></PirateList>
        </Col>
    </Row>);
});

export default PiratePage;