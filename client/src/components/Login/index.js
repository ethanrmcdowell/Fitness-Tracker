import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = props => {
  const history = useHistory();
  const handleSubmit = event => {
    history.push('/dashboard');
  };
  return (
    <div>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' />
        </label>
        <label>
          Password:
          <input type='password' />
        </label>
        <input type='submit' />
      </form>
    </div>
  );
};

export default Login;
