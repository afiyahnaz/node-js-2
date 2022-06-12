const books = [
    {id:1 , name: 'headfirst JS', cost: 140, stock:'true' },
    {id:2 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:3 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:4 , name: 'headfirst JS',   cost: 140, stock:'true' },
    {id:5 , name: 'Book by ghdhd', cost: 140, stock:'false' },
    {id:6 , name: 'book by hjdshhd', cost: 140, stock:'true' },
    {id:7 , name: 'book by hjdshhd', cost: 140, stock:'true' },
];

class BookCtrl{
     get (req,res){
        res.status(200);
        res.json(books);
    }

//...summary and details ...............
//GET htt://localhost:3003/books/1
  getById(req, res) {
    const id = parseInt(req.params.id);
    console.log(req.params, "parameters");
    let book;
    for(let i =0; i<books.length; i++){
        if(id === books[i].id){
            book = books[i];
        }
    }
    if(book){
    res.status(200);
    res.json(book);
  }
  else{
    res.status(404);
    res.send('Not Found');
  }
}
  
   /////CREAT...............
  //POST http://localhost:3000/books   body
    
  create = (req,res) =>{
    //validation............
    const payload = req.body;
    
    if(payload.name && payload.cost && payload.stock ){
      books.push(payload);
      
       res.status(201); //create:201
       res.send();
    }
    else{
      res.status(400);//bad request:client error
      res.send("invalid payload");
    }
    
  }

  //DELETE http://localhost:3003/api/books/:id
//   delete = (req, res) => {
//     const id = +req.params.id;
//     for(let i =0; i<books.length; i++){
//         if(books[i].id===id){
//             books.splice(i, 1);
//             break;

//         }
//     }

//     res.status(204); //no content
//     res.send();
// }

//UPDATE//verb::pUT
//PUT http://localhost:3003/api/books/:id

// update = (req,res)=>{
//   const id = +req.params.id;
//   const payload = req.body;
//   for(let i =0; i<books.length;i++){
//     if(books[i].id === id){
//       books[i].name = payload.name;
//       books[i].price = payload.price;
//     }
//   }
//   res.send(204);//no content
//   res.send();
// }




//PATCH http://localhost:3003/api/books/:id   {body}  {name :200}

// patch = (req,res) =>{
//   const id = +req.params.id;
//   const payload = req.body;
//   //higher order function.......
//   const book = books.find(function(elem){
//       return elem.id === id;
//   });
//   if(book){
//       for(let key in payload){
//           book[key] =payload[key];
//        }  
//    }        //  body.price = payload.price
//       else{
//           res.status(404);
//           res.send('Not Found');
//       }
//   }




    }
    module.exports = new BookCtrl();