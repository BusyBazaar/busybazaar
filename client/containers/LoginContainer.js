import React, { useState, useContext } from 'react';
import Auth from '../components/Auth';
import { Link, useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import useSignForm from "../components/useSignForm";

const LoginContainer = (props) => {
  const token = (new URLSearchParams(useLocation().search).get("token"));
  let history = useHistory();
  if (token) {
    Auth.login(() => history.push('/'));
  }
  const { handleChange, handleSubmit, inputs } = useSignForm(submit);

  const { username, password } = inputs;
  const [error, setError] = useState("");
  const { addUsername, addPassword, getToken } = useContext(UserContext);

  function submit(){
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        if (data.status === 401) {
          setError("This password does not match");
        } else if (data.status === 406) {
          setError("This username is not found");
          history.push("/login");
        } else {
          return data.json();
        }
      })
      .then((res) => {
        getToken(res);
        addUsername(username);
        addPassword(password);
        Auth.login(() => history.push("/"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header className="header-main" as="h2" color="black" textAlign="center">
        BusyBazaar
      </Header>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450, minWidth: 400 }}>
          <Header as="h2" color="blue" textAlign="center">
            Log-in to your account
          </Header>
          <Form onSubmit={handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                value={username}
                placeholder="username"
                type="text"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                value={password}
                placeholder="password"
                type="password"
                onChange={handleChange}
              />

              <Button color="blue" fluid size="large">
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
  );
};
export default LoginContainer;
