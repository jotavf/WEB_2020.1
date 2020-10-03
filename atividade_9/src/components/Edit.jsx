import React, { Component } from "react";
import FirebaseContext from '../utils/FirebaseContext'

const EditPage = (props) => (
  <FirebaseContext.Consumer>
      { contexto => <Edit firebase={contexto} id={props.match.params.id} /> }
  </FirebaseContext.Consumer>
)

class Edit extends Component {

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

  componentDidMount(){
    this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).get()
    .then(
      (doc) => {
        this.setState({
          nome:doc.data().nome,
          curso: doc.data().curso,
          capacidade:doc.data().capacidade
        })
      }
    )
    .catch(err => console.log(err))
  }

  onSubmit(e){
    e.preventDefault()
    this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).set(
      {
        nome: this.state.nome,
        curso: this.state.curso,
        capacidade: this.state.capacidade
      }
    )
    .then(() => {
      console.log("Estudante atualizado")
    })
    .catch(err => console.log(err))

    this.setState({nome:'', curso:'', capacidade: 0})
    
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Editar disciplina</h3>
        <form onSubmit={this.onSubmit}>
          <div className="from-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Exemplo: Requisitos de Software"
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
              type="text"
              className="form-control"
              placeholder="Exemplo: 50"
              value={this.state.capacidade}
              onChange={this.setCapacidade}
            />
            </div>
            <div className="form-group">
                <input 
                  type="submit" 
                  value="Editar"
                  className="btn btn-primary"
                />
            </div>
        </form>
      </div>
    );
  }
}

export default EditPage