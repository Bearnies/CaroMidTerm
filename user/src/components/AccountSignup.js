import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {Form as ReduxForm, Control} from 'react-redux-form';
import "./AccountSignup.css";

const bootstrapForm = props => {
  return <Form.Control {...props} />;
};

const AccountSignup = ({handleSubmit, isRedirect, url}) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={url}/>;
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
  
          <Link to='/user/login' className='btn Cancel'>Cancel</Link>
        </ReduxForm>

        <div>{link(isRedirect)}</div>
      </div>
  );
}

export default AccountSignup;

// export default function AccountSignup() {
//     //Sử dụng useState để set state, không cần state, setState
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setconfirmPassword] = useState('');

//     function validateForm() {
//       return (
//             username.length > 0 &&
//             password.length > 0 &&
//             password === confirmPassword
//             );
//     }
  
//     function handleSubmit(event) {
//       event.preventDefault();
//     }
  
//     return (
//       <div className='SignupForm'>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <FormLabel>Username</FormLabel>
//             <FormControl
//               autoFocus
//               value={username}
//             onChange={e => setUsername(e.target.value)}
//             />
//           </FormGroup>
  
//           <FormGroup>
//             <FormLabel>Password</FormLabel>
//             <FormControl
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type='password'
//             />
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Confirm Password</FormLabel>
//             <FormControl
//               value={confirmPassword}
//               onChange={e => setconfirmPassword(e.target.value)}
//               type='password'
//             />
//           </FormGroup>
  
//           <Button disabled={!validateForm()} type='submit' block>
//             Sign Up
//           </Button>
  
//           <Link to='/login' className='btn Cancel'>Cancel</Link>
//         </form>
//       </div>
//     );
// }