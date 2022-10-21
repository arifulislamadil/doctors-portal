import React from 'react';
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url( ${appointment})` }} className='flex jusify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} lt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-4xl text-primary font-bold'>Appointment</h2>
                <h3 className='text-2xl text-white'>Make An Appointment</h3>
                <p className='text-white my-4'>This is  doctor portal if you wanna make an appointment then click on below and then you can submit on the right section how to make and appointmet this is how we can make an appoint </p>
                <PrimaryBtn>Make An Appointment</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;