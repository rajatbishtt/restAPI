let CustomerModel = require('../models/customer.model')
let express = require ('express')
let router = express.Router()

//create a new customer
//post localhost
router.post('/customer',(req,res) => {
    //req.body
    if(!req.body){
        return res.status(400).send('Mising')
    }
    

    let model = new CustomerModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0 ){
            return res.status(400).send(doc)
        }

        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send("Missing URL parameters email")
    }

    CustomerModel.findOne({
        email: req.query.email
    }).then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// update request existing object
router.put('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send("Missing URL parameters email")
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    }).then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.delete('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send("Missing URL parameters email")
    }

    CustomerModel.findOneAndRemove({
        email: req.query.email
    }).then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})




module.exports = router