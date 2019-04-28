import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo-light.png';
import { registerUser } from '../../actions/auth';
import { toast } from 'react-toastify';

class Signup extends Component {
    handleSignUp = event => {
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            name, email, password
        };

        this.props.dispatch(registerUser(data));
    };

    render() {
        let isSuccess;

        if (this.props.response.register.response) {
            isSuccess = this.props.response.register.response.success;

            if (!isSuccess) {
                toast.error('Erro ao logar usuário');
            } else {
                toast.success('Usuário criado com sucesso!');
            }

        }

        return (
            <div className="form-body">
                {!isSuccess ? null : <Redirect to='login' />}
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
                                <h3>Registro de novos usuários.</h3>
                                <p>Defina as informações sobre o novo usuário.</p>
                                <div className="page-links">
                                    <Link to="/">Login</Link>
                                    <Link to="/register" className="active">Registrar</Link>
                                </div>
                                <form onSubmit={this.handleSignUp}>
                                    <input 
                                        className="form-control"
                                        type="text" name="name"
                                        placeholder="Nome completo"
                                    />
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
                                        <button className="ibtn">Registrar</button>
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

const mapStateToProps = (response) => ({ response });
  
export default connect(mapStateToProps)(Signup);