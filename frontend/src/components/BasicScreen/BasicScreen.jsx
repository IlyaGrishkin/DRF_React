import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './BasicScreen.css';



function BasicScreen() {
    return (
        <div className='screen-wrapper'>
            
            <div className='line'>
            </div>
            <div className='test-start'>
                <div className='test-start-info'>
                    <h3>Тесты</h3>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1" active={false}>Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" active={false}>Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" active={false}>Something else</Dropdown.Item>
                </DropdownButton>
                </div>
    
                <div className='card-container'>
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title className='card-title'>Русская архитектура</Card.Title>
                            <Card.Text>
                                Базовый тест на знание русской архитектуры XV-XVIII веков
                            </Card.Text>
                            <Card.Text>
                                <div className='timeInfo'>
                                    <p>Время: 15 мин</p>
                                    <video autoPlay muted loop className='timeVideo'>
                                        <source src="http://127.0.0.1:8080/wired-gradient-45-clock-time-hover-pinch.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                
                                <div className='questionsInfo'>
                                    <p>Количество вопросов: 15</p>
                                    <video autoPlay muted loop className='timeVideo'>
                                            <source src="http://127.0.0.1:8080/wired-outline-35-edit-hover-circle.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                 
                                 
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="http://127.0.0.1:8080/1677481342_bronk-club-p-otkritki-tomas-kinkeid-instagram-25.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>


        </div>
    )
}

export default BasicScreen;
