import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    SignInButtonsContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandle = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    onSubmitHandle = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.onSubmitHandle}>
                    <FormInput
                        name='email'
                        type='email'
                        onChangeHandle={this.onChangeHandle}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChangeHandle={this.onChangeHandle}
                        label='password'
                        required
                    />
                    <SignInButtonsContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </SignInButtonsContainer>
                </form>
            </SignInContainer >
        );
    }
}

export default SignIn;