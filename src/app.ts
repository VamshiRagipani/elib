import express from 'express';

const app = express();


//Routes

app.get('/', (req, res, next)=> {

    res.json({message : "welcome to elib API's"});

});



export default app;