// const express = require('express')
// const app = express()
// const cors = require('cors')
// const PORT = 8080

// app.use(cors())

// let menuItems = {
//     "butter milk":{
//       id: 1,
//       title: 'buttermilk pancakes',
//       category: 'breakfast',
//       price: 15.99,
//       img: '/images/pexels-photo-1279330.webp',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
//     },
//     "pancakes":{
//       id: 2,
//       title: 'buttermilk pancakes',
//       category: 'breakfast',
//       price: 15.99,
//       img: '/images/pexels-photo-1279330.webp',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
//     },
//     "milk":{
//       id: 3,
//       title: 'buttermilk pancakes',
//       category: 'breakfast',
//       price: 15.99,
//       img: '/images/pexels-photo-1279330.webp',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
//     },
//     "unknown":{
//       id: 4,
//       title: 'unknown',
//       category: 'breakfast',
//       price: 15.99,
//       img: '/images/pexels-photo-1279330.webp',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
//     }
// }


// app.use(express.static(__dirname + '/public'))

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html' )
// })

// app.get(`/api/:name`, (req,res) =>{
//     const meal =req.params.name.toLowerCase()
//     if(menuItems[meal]){
//         res.json(menuItems[meal])
//     }else{
//         res.json(menuItems['unknown'])
//     }
// })

// app.listen(PORT, ()=>{
//     console.log(`live at port ${PORT}`)
// })