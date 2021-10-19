import React from 'react';

import pic from "../../image/Contact Us.jpg"

const Contact = () => {
    return (
        <div>
           
            <div className="row px-0 mx-0 align-content-center container  ">
            <div className="col-md-5 col-12 mx-auto mt-5 px-4">
                 <input type="text" className=" mb-3 w-100 border border-danger border-4 rounded-pill" placeholder="Enter your name" /> <br />
                 <input type="email" className="mb-3 w-100 border border-success border-4 rounded-pill"   placeholder="Enter your email" /> <br />  
               
                 <textarea  className="w-100" cols="50"></textarea> <br />
                   
                    
               
                 <button className="btn btn-danger" type="submit">Submit</button>
             
            </div>
            <div className=" col-md-5 col-12 mt-5  ">
                <img src={pic} className="w-75" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Contact;