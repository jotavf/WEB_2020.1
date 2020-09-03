import React, { Component } from "react";
import axios from 'axios'


export default class Create extends Component {

  constructor(props) {
      super(props);
      this.state = {nome:'', curso:'', capacidade: 0}

      this.setNome = this.setNome.bind(this)
      this.setCurso = this.setCurso.bind(this)
      this.setCapacidade = this.setCapacidade.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  setNome(e){
      this.setState({nome:e.target.value}) 
  }

  setCurso(e){
      this.setState({curso:e.target.value})
  }

  setCapacidade(e){
      this.setState({capacidade:e.target.value})
  }

  onSubmit(e){
      e.preventDefault()
      const disciplina = {nome:this.state.nome,
                            curso:this.state.curso,
                            capacidade: parseInt(this.state.capacidade,10)}
    
      axios.post('http://localhost:3002/disciplinas/register',disciplina)
      .then((res) => {
          console.log(res.data._id)
      })
      .catch((err) => {
        console.log(err)
      })
    
      this.setState({nome: '', curso: '', capacidade: 0})
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Criar disciplina</h3>
        <form onSubmit={this.onSubmit}>
          <div className="from-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Exemplo: Desenvolvimento de Software p/ WEB"
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
            <label>Capacidade: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Exemplo: 50"
              value={this.state.capacidade}
              onChange={this.setCapacidade}
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
