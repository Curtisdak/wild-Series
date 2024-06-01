const categories = [

    {
        id: 1,
        name: "Science-Fiction",
    },
    {
        id: 2,
        name: "Comédie",
    },

]

const browse = (req, res) =>{

    const catTolower = req.query.q.toLowerCase();

    if(req.query.q != null){
        const catfilter = categories.filter((cat) => cat.name.toLowerCase().includes(catTolower));
        res.status(200).json(catfilter)
    }

}

const read = (req, res) =>{
    const parseId = parseInt(req.params.id, 10);
    const catId = categories.find((cat) => cat.id === parseId)
    if(categories != null){
        res.json(catId)
    }else{
        res.sendStatus(404)
    }   
}

module.exports = {browse, read}