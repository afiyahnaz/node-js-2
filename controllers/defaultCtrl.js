function get(req,res){
    res.status(200);
    res.send("hello Express");
}


function health( req, res){
    const status = { status: 'up'};
    res.json(status);
}

function trip( req, res){
    const status = { status: 'awesome'};
    res.json(status);
}






module.exports = {
    get,
    health,
    trip
    
    
};

