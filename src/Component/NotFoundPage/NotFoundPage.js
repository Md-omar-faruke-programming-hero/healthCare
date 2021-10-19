import React from 'react';
import { useHistory } from 'react-router';
import pic from '../../image/oops.jpg'
import "./NotFoundPage.css"

const NotFoundPage = () => {
    const history= useHistory();
    const gotohomepage=()=>{
    history.push("/home");

}

    return (
        <div className="text-center mb-5">
           <img src={pic} className="w-25 img " height="15%" alt="" />
          <p> <strong className="fs-3">404- page not found</strong> </p>
          <small>The page you are looking for might have been removed <br />had its name changed or is temporarily unavailable.</small><br /><br />
          <button onClick={gotohomepage} className="btn btn-primary">Go To HomePage</button>
            
        </div>
    );
};

export default NotFoundPage;