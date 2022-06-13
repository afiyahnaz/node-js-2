const apple = [
    {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
    {id:2 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:3 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:4 , name: 'headfirst JS',   cost: 140, stock:'true' },
    {id:5 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:6 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:7 , name: 'book by hjdshhd', cost: 140, stock:'true' },
];

class PartnerCtrl{
    get (req,res){
      
        res.status(200);
        res.json(apple);
    }
////summary and details...........
//..........CREAT...............
getById (req, res){
    const id  = parseInt(req.params.id);
    console.log(req.params, "parameters");
    let fruit;
    for(let i = 0; i< apple.length ; i++){
        if(id ===  apple[i].id){
            fruit=  apple[i];
        }
    }
   if(fruit){
    res.status(200);
    res.json(fruit);
   }
   else{
    res.status(404);
    res.send('Not Found');
   }
  
}

//CREAT POST....Syntax is pOST
//POST http://localhost:3003/apple   body

create = (req,res) =>{
    //validation......................
    const payload = req.body;
    if(payload.name && payload.cost && payload.stock){
        apple.push(payload);
    
        res.status(201); //create:201
        res.send();
    }
    else{
        res.status(400); //bad request:clent error
        res.send("Invalid payload");
    }
  }
    //DELETE http://localhost:3003/api/books/:id
    delete = (req, res) => {
        const id = +req.params.id;
        for(let i =0; i<apple.length; i++){
            if(apple[i].id===id){
                apple.splice(i, 1);
                break;
    
            }
        }
    
        res.status(204); //no content
        res.send();
    }
    
//UPDATE//verb::pUT
//PUT http://localhost:3003/api/books/:id

update = (req,res)=>{
    const id = +req.params.id;
    const payload = req.body;
    for(let i =0; i<apple.length;i++){
      if(apple[i].id === id){
        apple[i].name = payload.name;
        apple[i].cost = payload.cost;
        apple[i].stock = payload.stock;
      }
    }
    res.status(204);//no content
    res.send();
  }
  //PATCH http://localhost:3003/api/books/:id   {body}  {name :200}

patch = (req,res) =>{
    const id = +req.params.id;
    const payload = req.body;
  
    //higher order function.......
    const fruit = apple.find(function(elem){
        return elem.id === id;
    });
    
    if(fruit){
        for(let key in payload){
            fruit[key] =payload[key];
         }  
               res.status(204);
               res.send();
     }        //  body.price = payload.price
        else{
            res.status(404);
            res.send('Not Found');
        }
    }

    }
    module.exports = new PartnerCtrl();