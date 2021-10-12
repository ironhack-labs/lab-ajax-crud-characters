import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>CharactersApp</NavLink>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
          className="nav-link active" 
          aria-current="page" 
          to="/characters/create">Create Character</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link active" 
          aria-current="page" 
          to="/">Characters</NavLink>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;