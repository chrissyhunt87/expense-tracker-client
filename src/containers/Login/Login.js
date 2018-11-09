import React, { Component } from 'react';
import { CenteredDiv } from '../../elements/Div';

class Login extends Component {
    render() {
        return (
            <CenteredDiv>
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Enter your email:</label><br />
                    <input id="email" type="text" /><br /><br />

                    <label htmlFor="password">Enter your password:</label><br />
                    <input id="password" type="password" /><br /><br />

                    <button type="submit">Login</button>
                </form>
            </CenteredDiv>
        )
    }

}

export default Login;