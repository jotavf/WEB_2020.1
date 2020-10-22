import React, { Component } from 'react';
import Card from './Card';

export default class Signin extends Component {
    render() {
        return (
            <Card title="Signin">
                <form>
                    <div className="form-group">
                        <label>Login: </label>
                        <input type="text" placeholder='tutankhamun' className="form-control" 
                        value={this.state.login} onChange={this.setLogin}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" 
                        value={this.state.password} onChange={this.setPassword}/>
                    </div>
                    <input type="submit" value="Entrar" className="btn btn-primary"/>
                </form>
            </Card>
        )
    }
}