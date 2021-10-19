import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Details = () => {
        const{iNeedToDoThisTest}=useAuth()

     const {id}=useParams();
     const[serviceDetails,setServiceDetails]=useState([])
     useEffect(()=>{
         fetch("/Service.json")
         .then(res=>res.json())
         .then(data=>setServiceDetails(data.find(service=> parseInt(service.id)===parseInt(id))))
     },[id])


     const history =useHistory();
     const goBackToServicePage=()=>{
         history.push("/service");
     }
    
    

     const viewTestList=()=>{
        history.push("/booking")
     }
    
     
     const name=serviceDetails?.name
     const img=serviceDetails?.img
     const price=serviceDetails?.price
     const title= serviceDetails?.title

     

     
    
    return (
        <div className="row my-5 mx-4">
            <div className="col-12 col-md-5 mx-auto">
                 <h3>{name}</h3>
                 <p>{title}</p>
                 <h1>Test cost ${price} only</h1>
                 <button onClick={goBackToServicePage} className="btn btn-danger rounded-pill my-2 me-2" >go back</button>
                 <button onClick={()=>iNeedToDoThisTest(name,img,price)} id="o" className="me-2 btn btn-warning rounded-pill my-2 ">I need to do this test</button>
                 <button onClick={viewTestList} className="btn btn-primary rounded-pill my-2 ">View Test List</button>


            </div>
            <div className="col-12 col-md-5 mx-auto">
            <img src={img} width="70%" alt="" />
            </div>

            
        </div>
    );
};

export default Details;