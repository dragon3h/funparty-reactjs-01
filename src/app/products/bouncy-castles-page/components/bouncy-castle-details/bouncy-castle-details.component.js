import React from 'react';
import {connect} from 'react-redux';

import styles from './bouncy-castle-details.module.scss';
import FormInput from '../../../../shared/components/form-input/form-input.component';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';
import {getBouncyCastleDetails} from '../../../../redux/products/bouncy-castle-details/bouncy-castle-details.actions';

class BouncyCastleDetails extends React.Component {
  state = {...this.props.bouncyCastle};
  
  componentDidMount() {
    const id = this.props.match.params.id;
    const {getBouncyCastleDetails} = this.props;
    getBouncyCastleDetails(id);
    this.setState((state, props) => {
      return {...props.bouncyCastle};
    });
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    //
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({email: '', password: ''})
    // } catch (err) {
    //   console.log('error when user try login: ', err);
    // }
  };
  
  handleChange = (event) => {
    // event.preventDefault();
    const {value, name} = event.target;
    
    this.setState({[name]: value});
  };
  
  render() {
    return (
        <div className="container" data-test="component-login">
          <h2>{this.state.id ? 'Details of ' + this.state.name : 'New Bouncy Castle'}</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
                handleChange={this.handleChange}
                type='text'
                name='code'
                value={this.state.code}
                label='Code'
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='name'
                value={this.state.name}
                label="Name"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='preview'
                value={this.state.img}
                label="Preview"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='category'
                value={this.state.category}
                label="Category"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='description'
                value={this.state.description}
                label="Description"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='minAge'
                value={this.state.minAge}
                label="MinAge"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='maxAge'
                value={this.state.maxAge}
                label="MaxAge"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='maxQuantity'
                value={this.state.maxQuantity}
                label="MaxQuantity"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='isWater'
                value={this.state.isWater}
                label="Water Slide"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='rentPrice'
                value={this.state.rentPrice}
                label="Rent Price"
                required/>
            <CustomButton type="submit">
              Save
            </CustomButton>
            {/*<CustomButton onClick={this.logInWithGoogle}>*/}
            {/*  Login With Google*/}
            {/*</CustomButton>*/}
          </form>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    bouncyCastle: state.bouncyCastleDetails.bouncyCastleDetails,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBouncyCastleDetails: (id) => dispatch(getBouncyCastleDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BouncyCastleDetails);