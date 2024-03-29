import './login.css';

const Login = () => {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">CentralSocial</h3>
					<span className="loginDes">
						Connect with friends and world around you with
						CentralSocial
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input
							placeholder="Email"
							type="email"
							className="loginInput"
						/>
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
						/>
						<button className="loginButton">Log In</button>
						<span className="loginForget">Forgot Password?</span>
						<button className="loginRegisterButton">
							Create a New Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
