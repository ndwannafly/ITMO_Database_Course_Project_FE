import {observer} from "mobx-react-lite";
import {Row, Card, Col, ListGroup} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {$host} from "../axiosAPI";
import PirateList from "../components/PirateList";
import Pagination from "../components/Pagination";
import SentinelItem from "../components/SentinelItem";

const SentinelPage = observer (() =>{
    const {sentinel} = useContext(Context)
    const {pirate} =useContext(Context)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(4)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = pirate.pirate.slice(firstPostIndex, lastPostIndex)
    const [sen, setSentinel] = useState('')
    const [checkSen, setCheckSet] = useState(false)
    useEffect(() => {

        $host.get("/sentinel").then((response) => {
            sentinel.setSentinel(response.data)
        })

    }, [])

    return(

        <Row className="g-0">
            <Col  md={"auto"}  >
                <Card style={{
                    width: 180
                }}>

                    <ListGroup
                        style={{overflowY: 'scroll',
                            maxHeight: 770}}
                    >
                        {sentinel.sentinel.map(sentinel => <ListGroup.Item

                            onClick={() =>{

                               setSentinel(sentinel)
                                $host.get("/pirateSentinel/" + sentinel.id).then((response) => {
                                    pirate.setPirate(response.data)
                                })
                                setCheckSet(true)
                            }
                            }
                            style={{
                                height: 50, paddingBottom: 5, paddingTop: 5, cursor: "pointer"
                            }}
                        >
                            {sentinel.name}
                        </ListGroup.Item>)}
                    </ListGroup>
                </Card>
            </Col>
            <Col  md={7} className="align-self-center" style={{margin: 16.4}}>
                <Pagination totalPosts={pirate.pirate.length} postsPerPages={postsPerPage}
                            setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                <PirateList pirate={currentPosts}></PirateList>
            </Col >
            <Col style={{ positionAlign:""}} md={"auto"} >
                <h3 >
                    Дозорный:
                </h3>

                {checkSen && < SentinelItem sentinel={sen}></SentinelItem>}

            </Col>
        </Row>
    )



    }


)
export default SentinelPage;