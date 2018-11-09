import React, { Component } from 'react';
import { CenteredDiv } from '../../elements/Div';
import { FormInput } from '../../elements/Input';
import { SubmitButton } from '../../elements/Button';
import { FormLabel, SubtleP } from '../../elements/Text';

class Login extends Component {
    render() {
        return (
            <CenteredDiv>
                <h1>Login</h1>
                <form>
                    <FormLabel htmlFor="email">Your Email:</FormLabel><br />
                    <FormInput id="email" type="text" /><br /><br />

                    <FormLabel htmlFor="password">Your Password:</FormLabel><br />
                    <FormInput id="password" type="password" /><br /><br />

                    <SubmitButton type="submit">Login</SubmitButton>
                </form>
                <SubtleP>(Or click here to create account.)</SubtleP>
            </CenteredDiv>
        )
    }

}

export default Login;