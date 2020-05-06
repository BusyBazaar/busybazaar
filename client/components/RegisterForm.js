import React, { Component } from 'react'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            }
        };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log('username: ', this.state.user.username);
        console.log('password: ', this.state.user.password);
    };

    // fetch request, check status (should match username and password)
    // if successful, history "/"
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('username:' + this.state.username)
        const data = { username:this.state.username, password:this.state.password }
        fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json' }
        })
        // 401 and 406  
            .then(res => {
                if (res.status === 409) {
                    this.setState({
                      error: "The username already exists. Please use a different username" 
                    })
                    this.props.history.push("/register");
                    console.log('this.state.error: ', this.state.error);
                  }
                })
                .then(auth.login(() => {
                    this.props.history.push("/");
                  }))
              };
              
              
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text" 
                          id="username" 
                          onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input 
                          type="password" 
                          id="password" 
                          onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
        };

export default RegisterForm