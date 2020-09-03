const DisciplinaModel = require('../models/DisciplinaModel')

let disciplinas = [
    {_id:0, "nome":"SO", "curso":"Eng. de Software", "capacidade": 100}
]
let _id = 1

class DisciplinaService {

    static register(data){
        let disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        )
        disciplinas.push(disciplina)
        return disciplina
    }
    
    static list(){
        return disciplinas
    }

    static update(id, data){
        for(let e of disciplinas){
            if(e._id == id){
                e.nome = data.nome,
                e.curso = data.curso,
                e.capacidade = data.capacidade
                return e
            }
        }
        return null
    }

    static delete(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if(disciplinas[i]._id == id) {
                disciplinas.splice(i,1)
                _id--
                return true
            }
        }
        return false
    }
    
    static retrieve(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if(disciplinas[i]._id == id)
                return disciplinas[i]
        }
        return {}
    }
}

module.exports = DisciplinaService