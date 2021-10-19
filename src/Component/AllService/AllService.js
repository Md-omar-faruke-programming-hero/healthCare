import React from 'react';
import { useHistory } from 'react-router-dom';
import "./AllService.css"




const AllService = (props) => {
    const{name,img,id}=props.service
    const history=useHistory()
    const serviceDetails =()=>{
        history.push(`/details/${id}`)
    }



    
    return (
        <div className="col-12 col-md-3 g-2">
           <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top serviceimage " height="200px" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="text-center"><button onClick={serviceDetails} className="btn btn-danger rounded-pill">See details</button></p>                        
                    </div>
               </div>
            </div>
        </div>
    );
};

export default AllService;