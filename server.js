const express = require('express');
const { response } = require('express')
const cors = require('cors');
const router = require('./routes/index')

const app = express(); 

app.use(cors())
app.use(express.json())

app.use('/api', router)

// app.post('/api/cities', (req,res) => {
//     info.push({
//         id: info[info.length-1].id+1,
//         nombre: nombre, 
//         terminada: false
//     })
//     res.json({respuesta: info})
// })


app.listen(4000, () => console.log('App listening on port 4000'))
 
// app.get('/api/tareas', (req, res) => {
//     res.json({respuesta: info, success: true})
// })

// app.delete('/api/borrarTarea/:idABorrar', (req, res) => {
//     const idABorrar = parseInt(req.params.idABorrar)
//     info = info.filter(tarea => tarea.id !== idABorrar)
//     res.json({respuesta: info})
// })

// app.put('/api/modificarTarea/:idAModificar', (req, res) => {
//     const idAModificar = parseInt(req.params.idAModificar)
//     info = info.map(tarea => {
//         if (tarea.id === idAModificar) {
//            tarea = {...tarea, ...req.body}
//         }
//         return tarea
//     })
//     res.json({respuesta: info})
// })

