const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://adrielbaez:data27@cluster0.c11xx.mongodb.net/mytinerary?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('DataBase connected'))
.catch(error => console.log(error))