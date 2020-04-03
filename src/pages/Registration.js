import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/scss/style.scss';
import Aux from "../hoc/_Aux";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../store/constant";
import {Spinner} from 'react-bootstrap'
import { userActions } from '../store/actions';
class RegisterPage extends React.Component {
  constructor(props){
    super(props)
    this.props.logout();
    this.state = {
      loading: false,
      email:'',
      password:'',
      number:'',
    }
this.handleEmail = this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handleNumber = this.handleNumber.bind(this)
this.handleClick = this.handleClick.bind(this);

}
handleEmail(event){
    this.setState({email:event.target.value})
  }
  handlePassword(event) {
      this.setState({password: event.target.value});
      }

      handleNumber(event){
          this.setState({number:event.target.value})
        }
     handleClick(event) {
          const payload = {
            password:this.state.password,
            email:this.state.email,
            number:this.state.number,
          }
            this.props.register(payload)
      }

    render () {
      const error = {
        color: 'red'
      }
      const { registering , alert  } = this.props;
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
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up</h3>

                                <div className="input-group mb-3">
                                    <input value={this.state.email || ''} onChange={this.handleEmail} type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input value={this.state.number || ''} onChange={this.handleNumber} type="number" className="form-control" placeholder="Number"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input value={this.state.password || ''} onChange={this.handlePassword} type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                    </div>
                                </div>
                                <button onClick={this.handleClick} className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                {
                                  registering &&
                                  <Spinner animation="border" role="status">
                                  <span className="sr-only">Loading...</span>
                                  </Spinner>
                                }
                                {
                                  alert &&
                                  <p style={error} className="error">{alert.message}</p>
                                }
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/login">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

function mapState(state) {
  const { registering } = state.registration;
    const { alert } = state;
    return { registering, alert };
}

const actionCreators = {
    register: userActions.register,
    logout: userActions.logout
};

const Registration = connect(mapState, actionCreators)(RegisterPage);

export default Registration;
