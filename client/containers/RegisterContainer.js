import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Auth from '../components/Auth';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import useSignForm from "../components/useSignForm";

const Register = (props) => {
  let history = useHistory();
  const [error, setError] = useState("");
  const { handleChange, handleSubmit, inputs } = useSignForm(submit);
  const { username, password } = inputs;
  function submit(){
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      if (res.status === 406) {
        setError("username already in use try again");
        console.log('hey')
        history.push("/register");
      } else {
          history.push("/login");
        }
    })
  };
  return (
    <div>
      <Header as='h2' color='black' textAlign='center'>
        BusyBazaar
      </Header>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450, minWidth: 400 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Register
          </Header>
          <Form onSubmit={handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                name="username"
                value={username}
                placeholder='username' 
                type='text'
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name="password"
                value={password}
                placeholder='password'
                type='password'
                onChange={handleChange}
              />
              <Button color='blue' fluid size='large'>
                Register
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Register;