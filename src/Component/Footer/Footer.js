import React from 'react';
import logo from "../../image/dlab_logo.jpg"

const Footer = () => {
    return (
        <div className="bg-dark px-2">
        <div className="row px-0 mx-0   my-5">
            <div className="col-lg-4 w-50 mt-5 ms-5">
                <img src={logo} className="w-25" alt="" srcset="" />

            </div>
            <div className="col-lg-2 my-5  ">
                <p className="text-white">Head office</p>
                <small className="text-white mb-1"><i className="fas fa-location-arrow"></i> Comfort Tower 167/B, Green Road, Dhanmondi, Dhaka, Bangladesh.</small><br />
                <small className="text-white mb-1"><i className="fas fa-envelope-square"></i> D-Lab@bol-online.com</small><br />
                <small className="text-white"><i className="fas fa-mobile-alt"></i> Phone : 02-222246338, 02-222246339, 02-222246340, 02-222246341, 02-58153661 & 02-58157007</small><br />
               

            </div>
            <div className="col-lg-3 my-5">
            <p className="text-white">Uttara Branch</p>
            <small className="text-white"><i className="fas fa-location-arrow"></i>	House # 22, Road # Rabindra Sarani.Sector # 07, Uttara, Dhaka-1230.</small><br />
                <small className="text-white" ><i className="fas fa-mobile-alt"></i>58956388 & 58954726</small><br />
                <small className="text-white mb-1"><i className="fas fa-envelope-square"></i> D-Lab@bol-online.com</small><br />
                

            </div>
            
        </div>

        <div className=" d-flex justify-content-lg-around">
            <small className="text-white">Copyright &copy; 2021 D-Lab Diagnostic Center </small>
            <div className="d-flex">
                <p className="ms-3 text-white">Privacy policy</p>
                <p className="ms-3 text-white">Terms of Use</p>
                <p className="ms-3 text-white">Pricing</p>

            </div>

        </div>

        </div>
    );
};

export default Footer;