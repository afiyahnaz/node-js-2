const products = [
    {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
    {id:2 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:3 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:4 , name: 'headfirst JS',   cost: 140, stock:'true' },
    {id:5 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:6 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:7 , name: 'book by hjdshhd', cost: 140, stock:'true' },
];

class SoapCtrl{
    get (req,res){
       
        res.status(200);
        res.json(products);
    }

    ///creating summarry and details...............
    getById (req, res){
        const id  = parseInt(req.params.id);
        console.log(req.params, "parameters");
        let duck;
        for(let i = 0; i< products .length ; i++){
            if(id ===  products[i].id){
                duck =  products[i];
            }
        }if(duck){
            res.status(200);
            res.json(duck);
        }
        else{
            res.status(404);
            res.send('Not Found');
        }
        
    }

    ////post means using creating adding data
    //POST http://localhost:3003/products body
    create = (req,res) =>{
        //validation...........
        const payload = req.body;
        if(payload.name && payload.cost && payload.stock){
            products.push(payload);
            res.status(201); //creat 
            res.send();
        }
        else{
            res.status(400);  //bad request :client error
            res.send("Invalid payload");
        }  
      }
      
  //DELETE http://localhost:3003/api/books/:id
  delete = (req, res) => {
    const id = +req.params.id;
    for(let i =0; i<products.length; i++){
        if(products[i].id===id){
            products.splice(i, 1);
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
    for(let i =0; i<products.length;i++){
      if(products[i].id === id){
        products[i].name = payload.name;
        products[i].cost = payload.cost;
        products[i].stock = payload.stock;
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
    const duck = products.find(function(elem){
        return elem.id === id;
    });
    
    if(duck){
        for(let key in payload){
            duck[key] =payload[key];
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
    module.exports = new SoapCtrl();