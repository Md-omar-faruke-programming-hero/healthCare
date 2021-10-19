import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import useFireBase from '../Hooks/useFireBase';

const Login = () => {
    const {userEmail,userPassword,signInFrom,error,useingGoogleToSignIn,setIsloading}=useAuth()
    
    const location =useLocation()
    const history=useHistory()
    const redirect_uri= location.state?.from || "/home"
    const useingGoogleToSignIn1=()=>{
        useingGoogleToSignIn()
        .then((result) => {
          history.push(redirect_uri);
          setIsloading(false)
        })


    }

    
    return (
        <div className="text-center ">
        
        <div >
         
         <p className="text-primary">please login</p>
           <form onSubmit={signInFrom} >
          
            <input onBlur={userEmail} type="email" className="mb-3 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="email" /><br />
            <input onBlur={userPassword} type="password" className="mb-3 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="password" /><br />
            <p className="text-danger">{error}</p>
            <button className="btn btn-danger  px-5">sign in</button>
            <p><Link to="/signup">New User?</Link></p>
           </form>
            <small>or</small><br />
            <button onClick={useingGoogleToSignIn1} className="btn btn-danger  px-5">google sign in</button>

        </div>
 </div>
    );
};

export default Login;