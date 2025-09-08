import {Link, Route, Routes} from "react-router-dom";


export default function Header() {

    return (
      <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
               <div className="container-fluid">
                     <a href="" className=" navbar-brand">Stat-Buddy</a>
                     <button className="navbar-toggler" type="button"
                         data-bs-toggle='collapse' data-bs-target='#navbarNav'
                         aria-controls="navbarNav" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                             <li className=" nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                             <li className=" nav-item">
                                <Link to="/contact" className="nav-link">Contact US</Link>
                            </li>
                        </ul>
                     </div>
               </div>
            </nav>      
    );
}

