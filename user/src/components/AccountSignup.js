import React from 'react';
import {Button, Form, Navbar, Modal} from 'react-bootstrap';
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
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              Caro Việt Nam
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
      </div>

      <div className='SignupForm'>
        <ReduxForm model='userForm' onSubmit={event => handleSubmit(event)}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>SIGN UP</Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
            </Modal.Body>

            <Modal.Footer>
              <Button className='btn btn-primary Signupbtn' type='submit' block>
                Sign Up
              </Button>

              <Link to='/login' className='btn Cancel'>Cancel</Link>
              </Modal.Footer>
          </Modal.Dialog>
        </ReduxForm>
        <div>{link(isRedirect)}</div>
      </div>
    </div>
  );
}

export default AccountSignup;