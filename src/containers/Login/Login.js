import React, { Component } from 'react';
import { CenteredDiv } from '../../elements/Div';
import { FormInput } from '../../elements/Input';
import { SubmitButton } from '../../elements/Button';

class Login extends Component {
    render() {
        return (
            <CenteredDiv>
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Enter your email:</label><br />
                    <FormInput id="email" type="text" /><br /><br />

                    <label htmlFor="password">Enter your password:</label><br />
                    <FormInput id="password" type="password" /><br /><br />

                    <SubmitButton type="submit">Login</SubmitButton>
                </form>
            </CenteredDiv>
        )
    }

}

export default Login;