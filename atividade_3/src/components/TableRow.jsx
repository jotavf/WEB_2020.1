import React, { Component } from 'react';
import axios from 'axios'

export default class TableRow extends Component {
    
    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }
    
    apagar() {
        axios.delete('http://localhost:3001/estudantes/'+this.props.estudante.id)
        .then((res) => {
            console.log("Estudante: " + this.props.estudante.nome + " foi apagado")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.estudante.id}
                </td>
                <td>
                    {this.props.estudante.nome}
                </td>
                <td>
                    {this.props.estudante.curso}
                </td>
                <td>
                    {this.props.estudante.IRA}
                </td>
                <td style={{textAlign: "center"}}>
                    <button className="btn btn-primary">Editar</button>
                </td>
                <td style={{textAlign: "center"}}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}