import { Routes, Route } from 'react-router-dom'
import Feed from './feed.jsx'
import PostCard from './PostCard.jsx'
import './App.css'
import Usuario from './usuario.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postcard/:id" element={<PostCard />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </div>
  )
}

export default App