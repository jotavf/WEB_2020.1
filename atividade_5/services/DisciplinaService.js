const DisciplinaModel = require('../models/DisciplinaModel')

let disciplinas = []
let id = 0

class DisciplinaService {

    static register(data){
        let disciplina = new DisciplinaModel(
            id++,
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
            if(e.id == id){
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
            if(disciplinas[i] == id) {
                disciplinas.splice(i,1)
                return true
            }
        }
        return false
    }
    
    static retrieve(id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if(disciplinas[i] == id)
                return disciplinas[i]
        }
        return {}
    }
}

module.exports = DisciplinaService