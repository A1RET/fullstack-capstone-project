import React, { useState } from 'react';

import './RegisterPage.css';

function RegisterPage() {

	//insert code here to create useState hook variables for firstName, lastName, email, password
	const [firstFrame, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// insert code here to create handleRegister function and include console.log
	function handleRegister() {
		if (firstFrame === '' || lastName === '' || email === '' || password === '')
			return;
		console.log(firstFrame, lastName, email);
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-4">
					<div className="register-card p-4 border rounded">
						<h2 className="text-center mb-4 font-weight-bold">Register</h2>
						<div className="mb-4">
							<label htmlFor="firstName" className="form label"> FirstName</label><br />
							<input id="firstName" type="text" placeholder="First Name" value={firstFrame}
								onChange={(e) => setFirstName(e.target.value)} className="form-control" />
						</div>

						<div className="mb-4">
							<label htmlFor="lastName" className="form label"> LastName</label><br />
							<input id="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
								className="form-control" />
						</div>

						<div className="mb-4">
							<label htmlFor="email" className="form label"> Email</label><br />
							<input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
						</div>

						<div className="mb-4">
							<label htmlFor="password" className="form label"> Password</label><br />
							<input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
						</div>

						<button type="button" className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>

						<p className="mt-4 text-center">
							Already a member? <a href="/app/login" className="text-primary">Login</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
