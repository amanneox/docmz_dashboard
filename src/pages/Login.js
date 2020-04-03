import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/scss/style.scss';
import Aux from "../hoc/_Aux";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";
import { userActions } from '../store/actions';
import {Spinner} from 'react-bootstrap'
class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.props.logout();
    this.state = {
      loading: false,
      email:'',
      password:''
    }

this.handleEmail = this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handleClick = this.handleClick.bind(this);

}
handleEmail(event){
    this.setState({email:event.target.value})
  }
  handlePassword(event) {
      this.setState({password: event.target.value});
      }

 handleClick(event){
  const payload = {
    password:this.state.password,
    email:this.state.email
  }
    this.props.login(payload)
}
    render () {
        const error = {
          color: 'red'
        }
        const { loggingIn, alert } = this.props;
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input value={this.state.email || ''} onChange={this.handleEmail} type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input value={this.state.password || ''} onChange={this.handlePassword} type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input  type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <button onClick={this.handleClick} className="btn btn-primary shadow-2 mb-4">Login</button>
                                {
                                  loggingIn &&
                                  <Spinner animation="border" role="status">
                                  <span className="sr-only">Loading...</span>
                                  </Spinner>
                                }
                                {
                                  alert &&
                                  <p style={error} className="error">{alert.message}</p>
                                }
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/registration">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    const { alert } = state;
    return { loggingIn, alert };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const Login = connect(mapState, actionCreators)(LoginPage);
export default Login
