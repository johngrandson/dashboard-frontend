import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo-light.png';

class Signup extends Component {
    state = {  }
    render() {
        return (
            <div className="form-body">
                <div className="website-logo">
                    <a href="index.html">
                        <div className="logo">
                            <img className="logo-size" src={logo} alt="" />
                        </div>
                    </a>
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
                                    <Link to="/signup" className="active">Registrar</Link>
                                </div>
                                <form>
                                    <input className="form-control" type="text" name="name" placeholder="Nome completo" required />
                                    <input className="form-control" type="email" name="email" placeholder="E-mail" required />
                                    <input className="form-control" type="password" name="password" placeholder="Senha" required />
                                    <input className="form-control" type="password" name="password2" placeholder="Confirme a senha" required />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Registrar</button>
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

export default Signup;