import React,{Component} from 'react';
import { 
    Form, 
    FormControl, 
    FormGroup, 
    ControlLabel, 
    ButtonToolbar, 
    Button, 
    Schema,
    Container,
    Row,
    Col,
} from 'rsuite';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  history,
  Redirect
} from "react-router-dom";
import logo from '../Assets/logo.svg'
import Layout from './Layout'

const { StringType, NumberType } = Schema.Types;

  const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
      .addRule((value, data) => {
        console.log(data);
        if (value !== data.password) {
          return false;
        }
        return true;
      }, 'The two passwords do not match')
      .isRequired('This field is required.')
  });

class TextField extends React.PureComponent {
  render() {
    const { name, label, accepter, ...props } = this.props;
    return (
      <FormGroup>
        <ControlLabel>{label} </ControlLabel>
        <FormControl name={name} accepter={accepter} {...props} />
      </FormGroup>
    );
  }
}

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        email: '',
        password: '',
        verifyPassword: ''
      },
      formError: {}
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit = () => {
    const { formValue } = this.state;
    if (!this.form.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  }

  handleCancel = () => {
    //navigate this to home page
      this.props.history.push('/')
  }
  render() {

    const { formError, formValue } = this.state;
        return (

          <div className="Sign Up" style={styles.div}>
                     <div style={styles.box}>

              <Form
                ref={ref => (this.form = ref)}
                onChange={formValue => {
                  this.setState({ formValue });
                } }
                onCheck={formError => {
                  this.setState({ formError });
                } }
                formValue={formValue}
                model={model}
              >
                <TextField name="name" label="Username" />

                <TextField name="email" label="Email" />
                <TextField name="password" label="Password" type="password" />
                <TextField name="verifyPassword" label="Verify password" type="password" />

                <ButtonToolbar>
                  <Button appearance="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                  <Button style={{ color: 'red' }} onClick={this.handleCancel}>Cancel</Button>
                </ButtonToolbar>
              </Form>

            </div>
          </div>
        );
              }
    }
// npm install react-router-dom --save


const styles = {
  div: {
    display: 'flex',
    backgroundColor: '#303030',
    color: 'black',
    fontFamily:'Roboto',
    height: '100vh',
    alignItems: 'left',
    justifyContent: 'left',
  },
  box: {
    //backgroundImage: 'url(../Assets/logo3.jpeg)',
    backgroundColor:'white',
    padding: 10,
    alignItems:'center',
    position: 'relative',
    width: '40%',
    margin: 'auto',
    borderRadius: 10,

  },
  // row: {
  //   backgroundColor: 'green',  margin: 0,  padding: 0, display: 'flex', alignItems: 'center', marginTop: '1.0%'
  // },
};


export default CheckForm