import React from 'react';
import "./Home.css"
import banner from "../../image/undraw_medical_care_movn.svg"
import pic1 from "../../image/d1 (1).jpg"
import pic2 from "../../image/d1 (2).jpg"
import pic3 from "../../image/d1 (3).jpg"
import pic4 from "../../image/d1 (4).jpg"
import { useHistory } from 'react-router-dom';


const Home = () => {
    
    const history=useHistory();
    const seeMoreService=()=>{
        history.push('/service');
    }
    return (
        <>

        {/* banner section */}

       <div className=" row px-0 mx-0 align-items-center justify-content-center ">
       <div className="col-md-5 col-12">
            <div className="bannertital">
            <h1 >Your health <br />our First Priority</h1>
            <small className="text-primary">D-Lab Diagonstic Center</small><br />
            </div>
           <div className="bannertital">
           <button className="rounded-pill mb-2 me-2 mt-5 btn btn-outline-secondary" >Find a Doctor</button>
            <button className="rounded-pill mb-2 ms-1 mt-5 btn btn-outline-secondary" >Appoinment</button>
           </div>
            
        </div>
        <div className="col-md-5 col-12 ">
            <img className="w-100" src={banner} alt="" />
        </div>
       </div>

        {/* service section */}

       <div>
           <h1 className="text-center">Service & more</h1>
           <p className="text-center px-5">After inauguration in the year 1993 D-Lab started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the…</p>

           <div className="card-group px-5">
                    <div className="card">
                          <img src="https://i.ibb.co/WxB32xL/comfortbd-1579078657.jpg" className="card-img-top h-75" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Digital X-Ray</h5>
                        </div>
                    </div>
                    <div className="card">
                          <img src="https://i.ibb.co/sm9Qwtd/duplex-study-1578729080.jpg" className="card-img-top h-75" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Mammogram</h5>
                        </div>
                    </div>
                    <div className="card">
                          <img src="https://i.ibb.co/bbGqRBr/echo-cardiogram-1578728984.jpg" className="card-img-top h-75" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">OPG</h5>
                        </div>
                    </div>
            </div>
            <div className="text-center mt-1 mb-5">
                <button onClick={seeMoreService} className="btn btn-danger">See more</button>
            </div>
       </div>

        {/* FaQ section */}

       <div className="row px-0 mx-0 align-items-center justify-content-center p-5">
          <div className="col-md-5 col-12">
          <img  className="w-100 border rounded-circle" src="https://www.comfortbd.com/template/img/faq/4.jpg" alt="" />
          </div>
         
          <div className="col-md-5 col-12">
              <p className="fs-2">FAQ</p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I find a Doctor ?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      You can search for a Consultant at Comfot Hospitals Dhaka by going to our Find Consultant page.
                      </div>
                   </div>
               </div>
               <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I make Appointments to see a doctor?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    To make an appointment to see a Consultant, please contact our Appointment Centre:

                    Dhanmondi, Dhaka, Bangladesh.
                    Phone : 9135945-8 (Master Line)
                    Mobile : 01731 956033, 01552 468377
                    OR
                    House # 22, Road # Rabindra Sarani.Sector # 07, Uttara, Dhaka-1230. Phone : 58956388 AND 58954726

                    Online Appointment: You can also make appointments online through our website; please go to our homepage <code> https://www.D-Lab.com/</code>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How do I schedule tests and out-patient procedures?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    To schedule a test or out-patient procedure, please call the relevant 

                    Dhanmondi Dhaka, Bangladesh.
                    Phone : 9135945-8 (Master Line)
                    Mobile : 01731 956033, 01552 468377
                    OR
                    Uttara, Dhaka, Bangladesh.
                    Phone : 58954726
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#e" aria-expanded="false" aria-controls="e">
                    What are the emergency numbers ?
                    </button>
                    </h2>
                    <div id="e" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Dhanmondi Dhaka, Bangladesh.
                        Phone : 9135945-8 (Master Line)
                        Mobile : 01731 956033, 01552 468377
                        OR
                        Uttara, Dhaka, Bangladesh.
                        Phone : 58954726
                    </div>
                    </div>
                </div>
               
            </div>
          </div>

      </div>  
      <hr className="border border-2 border-primary container" />
      
      {/* doctors section */}

       <div>
          <h2 className="container text-success">Meet Our Doctors</h2>
         <div className="row  mx-0 row-cols-1 row-cols-md-4 g-2 p-5">
            <div className="col">
                <div className=" h-100">
                <img src={pic1} className="card-img-top h-50 doctor" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Zilan</h5>
                    <p className="card-text text-primary">Medicine</p>
                    <p className="text-center" ><button className="btn btn-success rounded-pill">view profile</button></p>
                </div>
                
                </div>
            </div>
            <div className="col">
                <div className=" h-100">
                <img src={pic2} className="card-img-top h-50 doctor" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Smirmina Thamina Khan</h5>
                    <p className="card-text text-primary">CARDIOLOGY.</p>
                    <p className="text-center" ><button className="btn btn-success rounded-pill">view profile</button></p>
                </div>
                
                </div>
            </div>
            <div className="col">
                <div className=" h-100">
                <img src={pic3} className="card-img-top h-50 doctor" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Roksana Begum</h5>
                    <p className="card-text text-primary">General Surgery</p>
                    <p className="text-center" ><button className="btn btn-success rounded-pill">view profile</button></p>
                </div>
               
                </div>
            </div>
            <div className="col">
                <div className=" h-100">
                <img src={pic4} className="card-img-top h-50 doctor " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Ratul</h5>
                    <p className="card-text text-primary">Urology</p>
                    <p className="text-center" ><button className="btn btn-success rounded-pill">view profile</button></p>
                </div>
               
                </div>
            </div>
            </div>
      </div> 
      <hr className="border border-2 border-primary container" />




        </>
    );
};

export default Home;