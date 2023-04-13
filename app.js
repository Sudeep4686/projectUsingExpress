
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/contact',contactRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.post('/contact', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    res.redirect('/');
  });

app.get('/success', (req, res, next) => {
    const message = req.query.message;
    res.send(`Form submitted successfully: ${message}`);
});  

app.listen(20000);
