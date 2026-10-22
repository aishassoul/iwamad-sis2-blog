import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" end>
        little<span>notes</span>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/posts">
          Posts
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
