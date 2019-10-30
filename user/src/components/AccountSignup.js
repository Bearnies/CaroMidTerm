import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';
import './AccountSignup.css';

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountSignup = ({handleSubmit, isRedirect, URL}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={URL}/>;
    }
    return <div/>;
  };


  return (
      <div className='SignupForm'>
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
  
          <Button type='submit' block>
            Sign Up
          </Button>

          <Link to='/login' className='btn Cancel'>Cancel</Link>
        </ReduxForm>

        <div>{link(isRedirect)}</div>
      </div>
  );
}

export default AccountSignup;