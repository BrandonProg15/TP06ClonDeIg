import { Routes, Route } from 'react-router-dom'
import Feed from './feed.jsx'
import PostCard from './PostCard.jsx'
import './App.css'
import Usuario from './usuario.jsx'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postcard/:id" element={<PostCard />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </div>
  )
}

export default App