require("dotenv").config()
const { request, response } = require("express")
const express = require("express")
const morgan = require('morgan')
const Note = require('./models/note')



// Data. This emulates a datastore
const allPersons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5232323",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-2345345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64234122",
  },
]


// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", (request, response) => {
  const now = new Date()
  const bodyContentText = `
  Phonebook has info for ${allPersons.length} people.
  ${now.toString()}
  `
  response
    .type("text")
    .send(bodyContentText)
})

app.get("/api/persons", (request, response) => {

    Note.find({}).then(result=>{
        result.forEach(note => {
            console.log(note.name," ",note.number);
          })
        response.json(result)
    })
  
})

app.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const person = allPersons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", (request, response,next) => {
  Note.findByIdAndDelete(request.params.id)
  .then(result =>{
    console.log(result)
    if(result){
      response.status(201).end();
    }else{
      response.status(404).end();
    }
    
  }).catch(error => {
    console.log(error)
    next(error)
  })
  
})

app.post("/api/persons", (request, response) => {
  const personPayload = request.body

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.number) errorMessages.push("number must be present")
  //const nameExists = allPersons.some(person => person.name === newPerson.name)
  //if (nameExists) errorMessages.push("name must be unique")

  if (errorMessages.length > 0) {
    response
      .status(422)
      .json({
        errorMessages,
      })
    return
  }

  // push not concat here. We want to mutate the array.
  const contact = new Note({...personPayload})
  contact.save().then(newPerson=>{
    response.json(newPerson)
  })
  //allPersons.push(newPerson)
  
})

errorHandling = (error, request,response,next)=>{
  if(error.name === 'CastErro'){
    response.status(400).send({error : "malformated id : using middelware"})
  }
  next(error)
}

app.use(errorHandling)