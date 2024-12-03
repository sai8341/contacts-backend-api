const express = require('express');
const errorHandler = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5001;


app.use('/api/contacts/', require('./routes/contactRoutes'))



app.use(errorHandler)

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})