const express = require('express')
const router = express.Router()
const DisciplinaService = require('../services/DisciplinaService')

router.get('/list', (req, res, next) => {
    return res.json(DisciplinaService.list())
})

router.post('/register', (req, res, next) => {
    const disciplina = DisciplinaService.register(req.body)
    return res.json(disciplina)
})

router.put('/update/:id', (req, res, next) => {
    const disciplina = DisciplinaService.update(req.params.id, req.body)
    return res.json(disciplina)
})

router.delete('/delete/:id', (req, res, next) => {
    const ok = DisciplinaService.delete(req.params.id)
    if ( ok )
        return res.json({success: true })
    else
        return res.json({success: false })
})

router.get('/retrieve/:id', (req, res, next) => {
    const disciplina = DisciplinaService.retrieve(req.params.id)
    return res.json(disciplina)
})

module.exports = router