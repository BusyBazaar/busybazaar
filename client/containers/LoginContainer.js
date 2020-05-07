import React, { useState, useContext } from 'react';
import Auth from '../components/Auth';
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginContainer = (props) => {
  const token = (new URLSearchParams(useLocation().search).get("token"));

  if (token) {
    Auth.login(() => props.history.push('/'));
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { addUsername, addPassword } = useContext(UserContext);

  const handleChangeUsername = e => {
    setUsername(e.target.value.trim());
  };
  const handleChangePassword = e => {
    setPassword(e.target.value.trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('username:' + username)
    fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
    })
        // 401 and 406  
        .then(res => {
            if (res.status === 401) {
                setError('This password does not match')
            } else if (res.status === 406) {
                setError('This username is not found')
                props.history.push('/login')
            } else {
              res.header('Authorization', token);
              addUsername(username);
              addPassword(password);
              Auth.login(() => props.history.push('/'));
            }
        })
  }

  return (
    <div>
      <Header className="header-main" as='h2' color='black' textAlign='center'>
        BusyBazaar
      </Header>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450, minWidth: 400 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Log-in to your account
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
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
      <a href="http://localhost:3000/auth/google">Sign In with Google</a>
    </div>
  )
}
export default LoginContainer;