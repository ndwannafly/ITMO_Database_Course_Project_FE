import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {addFruit} from "../../http/fruitTypeAPI";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {$host} from "../../axiosAPI";
import {Context} from "../../index";

const AddFruit = observer(({ show, onHide}) => {
    const [fruitName, setFruitName] = useState('')
    const [fruitType, setFruitType] = useState('')
    const [fruitDesc, setFruitDesc] = useState('')
    const [type, setType]= useState('')
    const {fruitTypeArray} = useContext(Context)
    const submit = () => {
        addFruit(fruitName, fruitDesc, fruitType)
        onHide()
    }
    useEffect(() => {
        $host.get("/fruitType").then((response) => {
            fruitTypeArray.setFruitType(response.data)
        })
    }, [])

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить Фрукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setFruitName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название фрукта"
                        type="text"
                    />

                    <Form.Control
                        onChange={e => setFruitDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание фрука"
                        type="text"
                    />

                    <Dropdown className="mt-2 mb-2"

                    >
                        <Dropdown.Toggle>
                            {type|| "Выберите тип фрукта"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{overflowY: 'scroll',
                                maxHeight: 300}}
                        >
                            <Dropdown.Item
                                style = {{color: "red"}}
                                onClick={() => {
                                    setType('')
                                    setFruitType('')
                                }
                                }
                            >
                                Отчистить
                            </Dropdown.Item>
                            {fruitTypeArray.fruitType.map(type => ((type.name !== "none") && <Dropdown.Item onClick={() => {
                                setFruitType(type.id)
                                setType(type.name)
                            }}>
                                {type.name}
                            </Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>


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

export default AddFruit;