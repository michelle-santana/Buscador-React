import React, { Component } from 'react';
import { Navbar, Input, Button, InputGroup, InputGroupAddon, Container, Col, Form, Row } from 'reactstrap';
import { MdSearch, MdStar } from 'react-icons/md'
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    state = {
        carregando: false,

        meteoro: []

    }


    celestial = async (evento) => {
        evento.preventDefault()

        this.setState({ carregando: true })

        const form = evento.target
        const inputGroup = form.children[0]
        const input = inputGroup.children[0]


        //const { data : seguidores} = await axios(`https://api.github.com/users/${input.value}/followers`)
        //const seguidores = await axios(`https://api.github.com/users/${input.value}/followers`)  //usar craze 
        // const seguidores = await axios(`https://api.https://api.nasa.gov//2.0/users/${input.value}`)  //usar craze 

        const meteoro = await axios(`https://api.nasa.gov/planetary/apod?date=${input.value}&api_key=WYgh6xypNaxWPX5zjDfkzmUZ19nTlpOdOC9vFaVF`)


        //this.setState({seguidores})

        this.setState({ meteoro: [meteoro.data, ... this.state.meteoro], carregando: false })
        console.log(meteoro.data)

    }


    render() {
        return (
            <>
                <Navbar color='dark'>
                    <Container className='d-flex justify-content-center'>
                        <img className='rounded-circle border border-white mr-3' width='50' src='https://www.thispersondoesnotexist.com/image' alt='pessoas aleatórias'

                        />
                        <span className='text-white'>
                            Logado Como
                            <Link className='text-white font-weight-bold ml-3' to='/'>
                            
                            {this.props.match.params.usuario}
                            </Link>
                        </span>
                    </Container>
                </Navbar>

                <Navbar color='dark' fixed='bottom'>
                    <Container className='d-flex justify-content-center'>
                        <Col xs='12' md='6'>
                            <Form onSubmit={this.celestial}>
                                <InputGroup>
                                    <Input type='date' />
                                    <InputGroupAddon addonType='append'>
                                        <Button color='danger'>
                                            {this.state.carregando ? (<Spinner color='light' />) : (<MdSearch size='20' />)}

                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Container>
                </Navbar>

                {this.state.carregando ? (
                    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <Spinner color='danger' size='lg' />
                        <span>Carregando conteúdo...</span>
                    </Container>
                ) : (<Container className='mt-3 mb-5'>
                    <Row>
                        {this.state.meteoro.map((meteoro) => (
                            <Col className='d-flex' xs='12' md='4' >
                                <Card className='text-white mb-2' color='dark'>
                                    <CardImg top width="100%" height='25%' src={meteoro.url} alt={meteoro.title} />
                                    <CardBody>
                                        <CardTitle className='h2 text center'>{meteoro.title}</CardTitle>
                                        <CardSubtitle className='text-muted text-center'>{meteoro.date.split('-').reverse().join('/')}</CardSubtitle>
                                        <CardText className='text-justify'>{meteoro.explanation}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                    )}


                {this.state.meteoro.length === 0 && (
                    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
                        <MdStar color='danger' size='150' />
                        <h3>Escolha sua data de nascimento e seja feliz!</h3>
                    </Container>
                )}




                {/*{this.state.carregando && (
                <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <Spinner color='dark' size='lg'/>
                   <span>Carregando conteúdo...</span>
                </Container>
                )} */}
            </>

        )
    }
}



export default Home;