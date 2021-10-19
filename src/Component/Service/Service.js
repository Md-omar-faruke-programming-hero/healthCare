import  { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';

const Service = () => {

    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch("./Service.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-center">Our all Services </h1>

            <div className="row mx-5">
                {
                    services.map(service=> <AllService service={service} key={service.id}></AllService> )
                }
            </div>

        </div>
    );
};

export default Service;