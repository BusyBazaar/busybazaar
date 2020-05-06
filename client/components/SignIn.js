import React, { Component } from 'react'
// ROUTER
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            erorr: ''
            }
        }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('username:' + this.state.username)
        const data = { username:this.state.username, password:this.state.password }
        fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json' },
        })
        // 401 and 406  
            .then(res => res.json())
            .then(() => {
                if (res.status === 401) {
                this.setState({ error: 'This password does not match' })
                } else if (res.status === 406) {
                         this.setState({ error: 'This username is not found' })
                         this.props.history.push('/login')
                       } else {
                           auth.login(() => {
                             this.props.history.push('/') 
                           })
                         }
                        })
                    }
            

            // .catch(error => console.error(‘Error:’, error))
            // .then(response => console.log(‘Success:’, response)); }
            // render(){
            // return(headers: 
        
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username">username</label>
                        <input 
                          type="text" 
                          value={this.state.username} 
                          id="username" 
                          onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input 
                          type="password" 
                          value={this.state.password} 
                          id="password" 
                          onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn
