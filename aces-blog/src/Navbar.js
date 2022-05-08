import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Ace Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                color:"#753742",
                backgroundColor:"#bfabb7",
                borderRadius:"8px"
            }}>New Blog</a>
            <a href="/recommendations">Recommendations</a>
            <a href="/about">About</a>
        </div>
    </nav>
  )
}

export default Navbar