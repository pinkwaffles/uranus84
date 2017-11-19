import React from 'react';
import $ from 'jquery';

const Login = () => {
	return (
		<div id='login'>
			<input type='text' id='username'></input>
			<input type='text' id='password'></input>
			<button type='button' /*onClick={() => {some function}}*/>
				Login
			</button>
			<button type='button' /*onClick={() => {some other function}}}*/>
				Sign-up
			</button>
		</div>
	);
}

export default Login;