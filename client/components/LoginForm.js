import React from 'react'

const LoginForm = (props) => {
    return (
			<div className="container">
					<form onSubmit={props.handleSubmit}>
							<h5>Sign In</h5>
							<div className="input-field">
									<label htmlFor="username">username</label>
									<input
											type="text"
											value={props.username}
											id="username"
											onChange={props.handleChangeUsername}
									/>
							</div>
							<div className="input-field">
									<label htmlFor="password">password</label>
									<input
											type="password"
											value={props.password}
											id="password"
											onChange={props.handleChangePassword}
									/>
							</div>
							<div className="input-field">
									<button>Login</button>
							</div>
							
					</form>
			</div>
			)

}
 

export default LoginForm
