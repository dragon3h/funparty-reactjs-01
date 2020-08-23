import React from 'react';

import bouncyCastles from '../../../../assets/bouncy-castles.json';
import styles from './bouncy-castle-details.module.scss';
import FormInput from '../../../../shared/components/form-input/form-input.component';
import CustomButton from '../../../../shared/components/custom-button/custom-button.component';

class BouncyCastleDetails extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      code: this.item.code,
      name: this.item.name,
      img: this.item.img || '',
      category: this.item.category,
      description: this.item.description,
      minAge: this.item.minAge,
      maxAge: this.item.maxAge,
      maxQuantity: this.item.maxQuantity,
      isWater: this.item.isWater ? 'Yes' : 'No',
      rentPrice: this.item.rentPrice,
    };
  }
  
  id = this.props.match.params.id;
  
  getDetails = () => {
    
    const currentItem = bouncyCastles[this.id - 1];
    console.log(currentItem);
    
    if (currentItem.restrictions) {
      currentItem.maxAge = currentItem.restrictions.maxAge ? currentItem.restrictions.maxAge : '';
      currentItem.minAge = currentItem.restrictions.minAge ? currentItem.restrictions.minAge : '';
      currentItem.maxQuantity = currentItem.restrictions.maxQuantity ?
          currentItem.restrictions.maxQuantity.toString() :
          '';
    }
    
    currentItem.rentPrice = currentItem.rentPrice ? currentItem.rentPrice.toString() : '';
    return currentItem;
  };
  
  item = this.getDetails();
  
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
    const {value, name} = event.target;
    
    this.setState({[name]: value});
  };
  
  render() {
    console.log(this.props);
    return (
        <div className="container" data-test="component-login">
          <h2>Details of {this.item.name}</h2>
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

export default BouncyCastleDetails;