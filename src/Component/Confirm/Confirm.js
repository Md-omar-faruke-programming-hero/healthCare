import React from 'react';
import useAuth from '../Hooks/useAuth';

const Confirm = () => {
    const{user}=useAuth()
    const name= user.displayName;

    return (
        <div className="text-center text-success border border-1 bg-warning w-25 h-75 mx-auto">
            Thank you { name },  booking is confirmed! Come on your suitable time 
        </div>
    );
};

export default Confirm;