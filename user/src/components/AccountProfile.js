import React from 'react';
import {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button, Form, Navbar, Modal} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountProfile = ({handleSubmit, isRedirect, URL, onLoad}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={URL}/>;
    }
    return <div/>;
  };

  let userChanges = useRef();
  let saveChanges = useRef();
  let descriptionChanges = useRef();
  const updateProfile = () => {
    ReactDOM.findDOMNode(userChanges).setAttribute('disabled', 'disabled'); //findDOMNode dùng để đọc value của người dùng nhập vào. Set Value
    ReactDOM.findDOMNode(saveChanges).removeAttribute('disabled');
    ReactDOM.findDOMNode(descriptionChanges).removeAttribute('disabled');
  };

  useEffect(() => {
    onLoad();
  });

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
              <Modal.Title>PROFILE</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Control.text
                  autoFocus
                  name='username'
                  model='.username'
                  component={bootstrapForm}
                  disabled
                />
              </Form.Group>
      
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Control.text
                  name='password'
                  model='.password'
                  component={bootstrapForm}
                  type='password'
                  disabled
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Control.text
                  name='description'
                  model='.description'
                  component={bootstrapForm}
                  ref={element => (descriptionChanges = element)}
                  disabled
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='primary' block ref={element => (userChanges = element)} onClick={() => updateProfile()} >
                Change
              </Button>
              
              <Button variant='primary' block disabled ref={element => (saveChanges = element)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </ReduxForm>
        <div>{link(isRedirect)}</div>
      </div>
    </div>
  );
}

export default AccountProfile;