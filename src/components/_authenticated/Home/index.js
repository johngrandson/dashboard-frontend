import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo-light.png';

class Home extends Component {
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
                                <h3>Armazene seus arquivos de forma prática.</h3>
                                <p>Acesse seu repositório na nuvem.</p>
                                <div className="page-links">
                                    <Link to="/" className="active">Login</Link>
                                    <Link to="/signup">Registrar</Link>
                                </div>
                                <form>
                                    <input className="form-control" type="text" name="username" placeholder="E-mail" required />
                                    <input className="form-control" type="password" name="password" placeholder="Senha" required />
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

export default Home;