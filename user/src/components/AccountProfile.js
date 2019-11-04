import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';
import './AccountSignup.css';

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountProfile = ({handleSubmit, isRedirect, URL}, user) => {
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
            >
            </Control.text>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Control.text
              name='password'
              model='.password'
              type='password'
              value={user.password}
              component={bootstrapForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Control.text
              name='newpassword'
              model='.newpassword'
              type='password'
              component={bootstrapForm}
              placeholder='Enter your New Password'
            />
          </Form.Group>
  
          <Button type='submit' block>
            Submit Changes
          </Button>
          
          <Link to='/login' className='btn Cancel'>Cancel</Link>
        </ReduxForm>

        <div>{link(isRedirect)}</div>
      </div>
  );
}

export default AccountProfile;