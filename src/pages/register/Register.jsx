import './register.css';

const Register = () => {
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
							placeholder="Username"
							type="text"
							className="loginInput"
						/>
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
						<input
							placeholder="Password Again"
							type="password"
							className="loginInput"
						/>
						<button className="loginButton">Sign In</button>
						<button className="loginRegisterButton">
							Log Into Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
