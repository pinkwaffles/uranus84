import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import { Login } from '.../client/components/Login.jsx';
import { expect } from 'chai';

describe('Todo', () => {
  it('should render a div with "Login" class', () => {
    const component = renderIntoDocument(
      <Login />
    );

    const loginEle = findRenderedDOMComponentWithClass(component, 'login');

    expect(login).to.be.ok;
  });
});

  // var App, Login;

  // it('should be a stateless functional component', function () {
  //   expect(React.Component.isPrototypeOf(Login)).to.be.false;
  // });

  // const component = renderIntoDocument(
  //    <Todo
  //        todo={‘Walk dog’}
  //    />
  // );

  //It should redirect when login button is clicked
  //It should redirect when signup button is clicked

  // beforeEach(function() {
  //   login = <Login />;
  // });

  // it('should have a login button', function() {
  //   expect(login.getElementById('login').type).to.equal('button');
  // });

  // it('should have a signup button', function() {
  //   expect(login.getElementById('sign-up').type).to.equal('button');
  // });

  // it('should have a username input field', function() {
  //   expect(login.getElementById('username').type).to.equal('input');
  // });

  // it('should have a password input field', function() {
  //   expect(login.getElementById('password').type).to.equal('input');
  // });