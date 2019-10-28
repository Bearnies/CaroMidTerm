import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';

import "./AccountLogin.css"

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountLogin = ({handleSubmit, isRedirect, url}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={url}/>;
    }
    return <div />;
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

// export default function AccountLogin() {
//   //Sử dụng useState để set state, không cần state, setState
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function validateForm() {
//     return(
//             username.length > 0 &&
//             password.length > 0
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className='Login'>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <FormLabel>Username</FormLabel>
//           <FormControl
//             autoFocus
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type='password'
//           />
//         </FormGroup>

//         <Button disabled={!validateForm()} type='submit' block>
//           Login
//         </Button>

//         <Link to='/signup' className='btn Signup'>Sign Up</Link>
//       </form>
//     </div>
//   );
// }