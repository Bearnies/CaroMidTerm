import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';
import './AccountLogin.css'

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountLogin = ({handleSubmit, isRedirect, URL}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={URL}/>;
    }
    return <div/>;
  };

  return(
        <div className='Login'>
        <ReduxForm model='userForm' onSubmit={event => handleSubmit(event)}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Control.text
              autoFocus
              name='username'
              model='.username'
              component={bootstrapForm}
              placeholder='Enter your Username'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Control.text
              name='password'
              model='.password'
              component={bootstrapForm}
              placeholder='Enter your Password'
              type='password'
            />
          </Form.Group>

          <Button className='btn btn-primary Loginbtn'  type='submit' block='true'>
            Login
          </Button>

          <Link to='/signup' className='btn Signup'>Sign Up</Link>
        </ReduxForm>

        <div>{link(isRedirect)}</div>
      </div>
    )
}

export default AccountLogin;
