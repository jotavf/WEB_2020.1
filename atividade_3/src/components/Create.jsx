import React, { Component } from "react";
import axios from 'axios'


export default class Create extends Component {

  constructor(props) {
      super(props);
      this.state = {nome:'', curso:'', IRA:''}

      this.setNome = this.setNome.bind(this)
      this.setCurso = this.setCurso.bind(this)
      this.setIRA = this.setIRA.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  setNome(e){
      this.setState({nome:e.target.value}) 
  }

  setCurso(e){
      this.setState({curso:e.target.value})
  }

  setIRA(e){
      this.setState({IRA:e.target.value})
  }

  onSubmit(e){
      e.preventDefault()
      const newEstudante = {nome:this.state.nome,
                            curso:this.state.curso,
                            IRA:this.state.IRA}
    
      axios.post('http://localhost:3001/estudantes', newEstudante)
      .then((res) => {
          console.log(res.data.id)
      })
      .catch((err) => {
        console.log(err)
      })
    
      this.setState({nome: '', curso: '', IRA: ''})
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Criar estudante</h3>
        <form onSubmit={this.onSubmit}>
          <div className="from-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Exemplo: Cleitin"
              value={this.state.nome}
              onChange={this.setNome}
            />
          </div>
          <div className="from-group">
            <label>Curso: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Exemplo: Design Digital"
              value={this.state.curso}
              onChange={this.setCurso}
            />
          </div>
          <div className="from-group">
            <label>IRA: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Exemplo: 8.5"
              value={this.state.IRA}
              onChange={this.setIRA}
            />
            </div>
            <div className="form-group">
                <input 
                  type="submit" 
                  value="Criar"
                  className="btn btn-primary"
                />
            </div>
        </form>
      </div>
    );
  }
}
