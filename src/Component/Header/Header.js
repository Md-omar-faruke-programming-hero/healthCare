import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/dlab_logo.jpg"
import useAuth from '../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const{user,signout,addedItem}=useAuth()
    return (
        <div>
           <div className="d-flex  align-items-center  justify-content-around">
           <div className="d-flex  align-items-center">
               <img width="150px" className="ms-3 logo" src={logo} alt="" />
            <div className="lh-1">
              <h1 className="title">-Lab</h1>
             
            
            </div>
           </div>
           <div className="lh-1 d-flex align-items-center " >
             <i className="border rounded-circle p-2 call text-primary me-2 fas fa-3x fa-phone-volume"></i>
              <div>
              <h6 className="nmbr lh-1 fs-3">Call Now <br /><small className="text-warning">+880173965033</small></h6>
              {
                  user?.email && <span className="fs-5">welcome '{user.displayName}'</span>
              }
              </div>
              
           </div>
           </div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                       
                          <Link className="navbar-brand" to="/home">D-Lab</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link"to="/about" >About</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link"to="/service" >Service</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link"to="/contact" >Contact</Link>
                                </li>
                                <li className="nav-item">
                               {
                                   user?.email? <button onClick={signout} className="btn btn-danger">logout</button>: <Link className="nav-link text-primary " to="/login" ><i className=" me-1 fas fa-sign-in-alt"></i>login</Link>
                               }
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link text-primary " to="/signup" ><i className="fas fa-user-plus"></i>Sign up</Link>
                                </li>

                            
                            </ul>
                            <form className="d-flex align-items-center">
                            <i class="fas fa-clipboard-check me-5"><span className="text-success ms-1 fs-5">{addedItem}</span></i>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                               
                            </form>
                        </div>
                    </div>
            </nav>
       </div>
    );
};

export default Header;