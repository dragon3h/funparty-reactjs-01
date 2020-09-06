import React from 'react';
import {connect} from 'react-redux';

import styles from './bouncy-castle-details.module.scss';
import FormInput from '../../../../shared/components/form-input/form-input.component';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';
import {
  getBouncyCastleDetails,
  updateBouncyCastle,
} from '../../../../redux/products/bouncy-castle-details/bouncy-castle-details.actions';

class BouncyCastleDetails extends React.Component {
  state = {
    bouncyCastleDetails: {...this.props.bouncyCastle},
  };
  
  componentDidMount() {
    const id = this.props.match.params.id;
    const {getBouncyCastleDetails} = this.props;
    getBouncyCastleDetails(id);
    this.setState((state, props) => {
      return {bouncyCastleDetails: {...props.bouncyCastle}};
    });
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const {updateBouncyCastle} = this.props;
    updateBouncyCastle(this.state.bouncyCastleDetails);
  };
  
  handleChange = (event) => {
    // event.preventDefault();
    const {value, name} = event.target;
    
    this.setState({
      bouncyCastleDetails: {
        ...this.state.bouncyCastleDetails,
        [name]: value,
      },
    });
  };
  
  render() {
    return (
        <div className="container" data-test="component-login">
          <h2>{this.state.bouncyCastleDetails.id ?
              'Details of ' + this.state.bouncyCastleDetails.name :
              'New Bouncy Castle'}</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
                handleChange={this.handleChange}
                type='text'
                name='code'
                value={this.state.bouncyCastleDetails.code}
                label='Code'
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='name'
                value={this.state.bouncyCastleDetails.name}
                label="Name"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='preview'
                value={this.state.bouncyCastleDetails.img}
                label="Preview"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='category'
                value={this.state.bouncyCastleDetails.category}
                label="Category"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='description'
                value={this.state.bouncyCastleDetails.description}
                label="Description"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='minAge'
                value={this.state.bouncyCastleDetails.minAge}
                label="MinAge"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='maxAge'
                value={this.state.bouncyCastleDetails.maxAge}
                label="MaxAge"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='maxQuantity'
                value={this.state.bouncyCastleDetails.maxQuantity}
                label="MaxQuantity"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='isWater'
                value={this.state.bouncyCastleDetails.isWater}
                label="Water Slide"
                required/>
            <FormInput
                handleChange={this.handleChange}
                type="text"
                name='rentPrice'
                value={this.state.bouncyCastleDetails.rentPrice}
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
  updateBouncyCastle: (bouncyCastle) => dispatch(updateBouncyCastle(bouncyCastle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BouncyCastleDetails);