let express= require('express')
let router = express.Router()

//query string => query property on the equest object
router.get('/person', (req,res) => {
    if(req.query.name){
    res.send('You have a request');
    } else {
    res.send('You are requewsted')
    }
})
// params property on the request object
router.get('/person/:name', (req,res) => {
    res.send(` YOU have requested ${req.params.name}`);
})

module.exports = router