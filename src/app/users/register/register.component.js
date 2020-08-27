import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import styles from './register.module.scss';

import FormInput from '../../shared/components/form-input/form-input.component';
import CustomButton from '../../shared/components/custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    
    if(password !== confirmPassword) {
      alert("passwords don't match");
    }
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      await createUserProfileDocument(user, {displayName});
      this.setState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    } catch (err) {
      console.log('error when create user: ', err);
    }
  }
  
  handleChange = (event) => {
    const {value, name} = event.target;
    
    this.setState({[name]: value});
  };
  
  render() {
    return (
      <div className={styles.login} data-test="component-login">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type='text'
            name='displayName'
            value={this.state.displayName}
            label='Name'
            required/>
          <FormInput
            onChange={this.handleChange}
            type='email'
            name='email'
            value={this.state.email}
            label='Email'
            required/>
          <FormInput
            onChange={this.handleChange}
            type="password"
            name='password'
            value={this.state.password}
            label="Password"
            required/>
          <FormInput
            onChange={this.handleChange}
            type="password"
            name='confirmPassword'
            value={this.state.confirmPassword}
            label="Confirm Password"
            required/>
          <CustomButton type="submit">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
  
};

export default withRouter(Register);