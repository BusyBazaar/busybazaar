import React, { useState } from 'react';
import Auth from '../components/Auth';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeUsername = e => {
    setUsername(e.target.value.trim());
  };
  const handleChangePassword = e => {
    setPassword(e.target.value.trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      if (res.status === 406) {
        setError("username already in use try again");
        console.log('hey')
        props.history.push("/register");
      } else {
          props.history.push("/login");
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
                value={username}
                placeholder='username' 
                type='text'
                onChange={handleChangeUsername}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                value={password}
                placeholder='password'
                type='password'
                onChange={handleChangePassword}
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