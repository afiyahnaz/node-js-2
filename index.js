const express = require('express');
const bodyParser = require('body-parser');



///.............registering.............

const defaultRouter = require('./routes/defaultRoutes');
const bookRouter = require('./routes/bookRouter');
const partnerRouter = require('./routes/partnerRouter');
const soapRouter = require('./routes/soapRouter');



const app = express();
app.listen(3003, function(){
    console.log('server is running on 3003');
});

//body parser registering..............
app.use(bodyParser.json());

//.......app registrating.............
app.use('/',defaultRouter);
app.use('/api/books', bookRouter);
app.use('/api/apple', partnerRouter);
app.use('/api/products', soapRouter);





