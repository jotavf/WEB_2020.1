const DisciplinaModel = require('../models/DisciplinaModel')

class DisciplinaService{
    static register(req, res){
        DisciplinaModel.create(req.body)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (err) => {
                res.status(500).json(err)
            }
        )
    }

    static list(req, res){
        DisciplinaModel.find()
        .then(
            (disciplinas) => {
                res.status(200).json(disciplinas)
            }
        )
        .catch(
            (err) => {
                res.status(500).json(err)
            }
        )
    }

    static delete(req, res){
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (disciplina) => {
                res.status(200).json(disciplina)
            }
        )
        .catch(
            (err) => {
                res.status(500).json(err)
            }
        )
    }

    static update(req, res){
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, {'new':true})
        .then(
            (disciplina) => {
                res.status(200).json(disciplina)
            }
        )
        .catch(
            (err) => {
                res.status(500).json(err)
            }
        )
    }

    static retrieve(req, res){
        DisciplinaModel.findById(req.params.id)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (err) => {
                res.status(500).json(err)
            }
        )
    }

}

module.exports = DisciplinaService