const sayWelcome = (req, res ) =>{

    console.info(req.query);

    res.json(`welcome to Wild Series ${req.query.name} !`)
}

module.exports = {sayWelcome} ; 