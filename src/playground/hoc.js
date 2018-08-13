// Higher Order Component - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>  
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Big brother is watching you.</p>}
      <WrappedComponent {...props}  />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated && <p>Please login before continuing.</p>}
      <WrappedComponent {...props}  />
    </div>
  );
};

//requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="THIS IS SPARTAAA!!!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="THIS IS SPARTAAA!!!" />, document.getElementById('app'));