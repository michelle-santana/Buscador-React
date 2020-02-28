import React, { Component } from 'react';
import { Container, Form, Input, Button} from 'reactstrap'



export default class Login extends Component {
  logar = (evento) => {
      evento.preventDefault();

      const form = evento.target
      const input = form.children[0]

      this.props.history.push(`/home/${input.value}`)

      
  }


  render() {
    return (
    <Container className="h-100">
    <Form
      className="h-100 d-flex flex-column align-items-center justify-content-center"
      onSubmit={this.logar}
    >

      <Input
        className="text-center mt-2"
        placeholder="Faça seu login"
      />
      <Button className="w-100" color="dark">
        Logar
      </Button>
    </Form>
  </Container>);
  }
}
