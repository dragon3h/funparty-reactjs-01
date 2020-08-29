import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import styles from './login.module.scss';

import FormInput from '../../shared/components/form-input/form-input.component';
import CustomButton from '../../shared/components/custom-button/custom-button.component';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    }
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch (err) {
      console.log('error when user try login: ', err);
    }
  }
  
  handleChange = (event) => {
    const {value, name} = event.target;
    
    this.setState({[name]: value});
  };
  
  logInWithGoogle = async () => {
    const user = await SignInWithGoogle();
    if (user) {
      this.props.history.push(`${this.props.match.url}dashboard`);
    } else {

    }
  };
  
  render() {
    return (
      <div className={styles.login} data-test="component-login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={this.state.email}
            label='Email'
            required/>
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name='password'
            value={this.state.password}
            label="Password"
            required/>
          <CustomButton type="submit">
            Login
          </CustomButton>
          <CustomButton onClick={this.logInWithGoogle}>
            Login With Google
          </CustomButton>
        </form>
      </div>
    );
  }
  
};

export default withRouter(Login);