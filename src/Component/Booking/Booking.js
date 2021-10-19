import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
const Booking = () => {
    const{user,tests,prices,totalPrice}= useAuth()

    const history=useHistory()
    const confirm=()=>{
        history.push("/confirm")
    }
    return (
        <div>
        <div className="row px-0 mx-0 container  ms-auto">
            <div className="col-lg-5 my-5 ">
            <h2>Patient Info</h2>
            <hr  className=""/>
            <input required type="text" className="mb-3 w-100 border rounded-3 p-1  bg-light bg-opacity-25" placeholder= {user.displayName}  /><br />
            <input type="text" className="mb-3 w-100 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="Address" /><br />
            <input type="text" className="mb-3 w-100 border rounded-3 p-1  bg-light bg-opacity-25" placeholder="Flat,suite or floor" /><br />
            <label htmlFor="phone">Enter a phone number:</label><br/><br/>
            <input type="tel"  placeholder="01-123-458-678" pattern="[0-1]{2}-[0-9]{3}-[0-9]{2}-[0-9]{3}" required className="mb-3 w-100 border rounded-3 p-1  bg-light bg-opacity-25"   /><br />
            <label htmlFor="birthday">Want to test on:</label> <br />
            <input type="date" id="" className="mb-3 w-100 border rounded-3 p-1  bg-light bg-opacity-25" name=""/>
          
            <button onClick={confirm} className="btn btn-danger mb-5 w-100 px-5 ">save & confirm</button>
           
            
            
            </div>
            <div className=" col-lg-5 mt-5">
                 <p>D-Lab Diagnostic Center</p>
                <div className="row">
                    
                    <div className="col-md-8">
                    <div className="w-100">
                       {
                           tests.map(name=> <p className="h-50">{name}</p>)
                       }
                    </div>

                    </div>
                    <div className="col-md-4">
                    <div className="w-100">
                       {
                           prices.map(cost=> <p className="h-50">${cost}</p>)
                       }
                    </div>

                    </div>

                </div>
               
                <table className="table">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                               <tr>
                                   <td >Total</td>
                                   <td>$ {totalPrice}</td>
                                </tr>
                            </tbody>
                 </table>
                 <button  className="btn w-100 btn-light">place order</button>
                
            </div>

        </div>

    </div>
    );
};

export default Booking;