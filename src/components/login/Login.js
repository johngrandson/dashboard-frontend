import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import logo from '../../assets/images/logo-light.png';
import { loginUser } from "../../actions/auth";
import { setCookie } from '../../utils/cookies';
import { toast } from 'react-toastify';

class Login extends Component {
      onHandleLogin = event => {
        event.preventDefault();
    
        let email = event.target.email.value;
        let password = event.target.password.value;
    
        const data = {  
          email, password
        };
    
        this.props.dispatch(loginUser(data));
      }

      render() {
        let isSuccess;

        if (this.props.response.login.response) {
          isSuccess = this.props.response.login.response.success;
          
          if (isSuccess) {
            toast.success('Usuário logado com sucesso!');
            setCookie('token', this.props.response.login.response.token, 1);
          } else {
            toast.error('Erro ao logar usuário!');  
          }
        }
    
        return (
          <div className="form-body">
            {!isSuccess ? null : <Redirect to='dashboard' />}
              <div className="website-logo">
                  <Link to="/login">
                      <div className="logo">
                          <img className="logo-size" src={logo} alt="" />
                      </div>
                  </Link>
              </div>
              <div className="row">
                  <div className="img-holder">
                      <div className="bg"></div>
                      <div className="info-holder">

                      </div>
                  </div>
                  <div className="form-holder">
                      <div className="form-content">
                          <div className="form-items">
                              <h3>Armazene seus arquivos de forma prática.</h3>
                              <p>Acesse seu repositório na nuvem.</p>
                              <div className="page-links">
                                  <Link to="/" className="active">Login</Link>
                                  <Link to="/register">Registrar</Link>
                              </div>
                              <form onSubmit={this.onHandleLogin}>
                                  <input 
                                      className="form-control"
                                      type="email"
                                      name="email"
                                      placeholder="E-mail"
                                  />
                                  <input
                                      className="form-control"
                                      type="password"
                                      name="password"
                                      placeholder="Senha"
                                  />
                                  <div className="form-button">
                                      <button id="submit" type="submit" className="ibtn">Login</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (response) => ({ response })

export default connect(mapStateToProps)(Login);