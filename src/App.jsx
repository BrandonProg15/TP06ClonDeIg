import { Routes, Route } from 'react-router-dom'
import Feed from './feed.jsx'
import PostCard from './PostCard.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postcard" element={<PostCard />} />
      </Routes>
    </div>
  )
}

export default App