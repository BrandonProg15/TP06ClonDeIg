import { Routes, Route, Link } from 'react-router-dom'
import Feed from './feed.jsx'
import PostCard from './PostCard.jsx'
import './App.css'
import Usuario from './usuario.jsx'

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">Instagram</div>
          <div className="search"> <input placeholder="Username, hashtag and story search" /> </div>
          <div className="top-actions">
            <button className="icon">⚙️</button>
            <button className="icon">📷</button>
            <button className="new-post">New Post</button>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="profile-card">
            <img src="https://i.pravatar.cc/120" alt="avatar" />
            <h3>Uğur Mercan</h3>
            <p className="handle">@ugur_mercan0</p>
            <div className="badges">
              <span>121K</span>
              <span>900K</span>
            </div>
          </div>

          <nav className="side-nav">
            <Link to="/" className="nav-item">🏠 <span>Home</span></Link>
            <a className="nav-item">🔎 <span>Explore</span></a>
            <a className="nav-item">🎬 <span>Reels</span></a>
            <a className="nav-item">📺 <span>IGTV</span></a>
            <a className="nav-item">🔔 <span>Notification</span></a>
          </nav>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postcard" element={<PostCard />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App