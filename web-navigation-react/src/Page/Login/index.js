import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const { history } = props;
  // console.log(props);
  return (
    <div>
      <h1>Login</h1>
      <Link to="/testFile">aaaa</Link>
      <br />
      <a href="/testFile">2222</a>
      <br />
      <button
        onClick={() => {
          history.push('testFile');
        }}
        type="button"
      >
        click
      </button>
    </div>
  );
};

export default Login;
