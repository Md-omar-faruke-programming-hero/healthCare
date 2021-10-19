import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import useFireBase from '../Hooks/useFireBase';

const Signup = () => {
    const {userEmail,userPassword,signUpFrom,error,useingGoogleToSignIn,accountCreate}= useAuth()

    return (
        <div className="text-center ">
        <div >
        <h1>Feel free to connect</h1>
           <form  onSubmit={signUpFrom} >
          
          <input  required type="text" className="mb-3 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="name" /><br />
            
            <input onBlur={userEmail} required type="email" className=" mb-3 border rounded-3 p-1 bg-light bg-opacity-25" placeholder="email" /><br />
            <input onBlur={userPassword} type="password" className="mb-3 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="password " /><br />
            
                <p className="text-success">{accountCreate}</p>
                 <p className="text-danger">{error}</p>
            
            
            <button  className="btn btn-danger  px-5">sign up</button>
            <p><Link to="/login">Allready have Account?</Link></p>
       
           </form>
            <small>or</small><br />
            <button onClick={useingGoogleToSignIn}  className="btn btn-danger  px-5">google sign in</button>

        </div>
 </div>
    );
};

export default Signup;