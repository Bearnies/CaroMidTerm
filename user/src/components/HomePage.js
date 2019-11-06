import React from 'react';
import {Navbar, Modal} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import './App.css'

const AccountLogin = ({handleSubmit, isRedirect, URL}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={URL}/>;
    }
    return <div/>;
  };

  return(
        <div>
          <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                  Caro Việt Nam
                </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar>
          </div>

          <div>
            <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>HOMEPAGE</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Link to='/gameWithBOT' className='btn homepageBtn rounded-pill btn-primary'>Play with Computer</Link>
                        <Link to='/login' className='btn homepageBtn rounded-pill btn-primary'>Play with Others</Link>
                    </Modal.Body>
            </Modal.Dialog>
          </div>

          <div>{link(isRedirect)}</div>
        </div>
    )
}

export default AccountLogin;
