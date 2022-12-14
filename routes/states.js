let express = require('express')
let States = require('../models').States

let router = express.Router()

//fetch all of the States
router.get('/states', function(req, res, next ){
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch ( err => next(err))
})

// The state chicago or state/Minnesota

router.get('/state/:name', function(req, res, name ){
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err))
})

//patch route to update a state - visited or not
//Request to states or random names 

router.patch('/states/:name', function(req, res, next){
    let stateName = req.params.name
    let stateVisited = req.body.visited

    States.update( {visited: stateVisited }, { where: {name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated ==1) {
                return res.send('ok')   // as default return status code 200 
            }
            return res.status(404).send('State not found')
        })
        .catch( err => next(err) )
})

module.exports = router