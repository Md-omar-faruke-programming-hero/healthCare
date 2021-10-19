import React from 'react';
import "./About.css"

const About = () => {
    return (
<>
        <div className="row justify-content-center align-items-center p-5">
            <div className="col-md-5 col-12">
            Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation. <br /><br />

            After inauguration in the year 1993 COMFORT started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Comfort. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. Understanding this phenomenon, Comfort is committed to reduce the gap as much as possible; consequently, it is determined to ensure patient recovery with proper services in a comfortable way within the shortest possible time and at an affordable cost. It is apparent that the company’s internal facilities, application of advanced technologies, patient management, before and after care attitude, personalized care services have made a positive difference in the health care sector of Bangladesh.
            </div>
            <div className="col-md-5 col-12">
            <img  className="w-100 border rounded-circle" src="https://www.comfortbd.com/IST/2019/December/26th/1577351237/about-comfort_1578326116.png" alt="" />
            </div>

        </div>
        {/* <div className="d-flex align-items-center justify-content-center p-5">
            <div className="w-50">
           
            </div>
            <div className="w-50 p-5">
           
            </div>
            
        </div> */}
        </>
    );
};

export default About;