import { useState,useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useMatch
} from 'react-router-dom'

import Menu from '../Menu/Menu'
import AnecdoteList from '../AnecdoteList/AnecdoteList'
import About from '../About/About'
import Footer from '../Footer/Footer'
import CreateNew from '../CreateNew/CreateNew'
import Anecdote from '../Anecdote/Anecdote'
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  

  const match = useMatch("/anecdotes/:id")
  const anecdote = match ? anecdotes.find(anecdote=>anecdote.id === Number(match.params.id)) : null

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`A new anecdote ${anecdote.content} created!` )
  }

  useEffect(()=>{
    console.log("effect called");
    setTimeout(()=>{
      setNotification('')
    },5000)
  },[notification])

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
      <div>
        <h1>Software anecdotes</h1>
        <Menu />
        <p>{notification}</p>
        <Routes>
          <Route path='/' element={<AnecdoteList anecdotes={anecdotes}/>}/>
          <Route path='/add' element={<CreateNew addNew={addNew} />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/anecdotes/:id' element={<Anecdote anecdote={anecdote}/>} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
