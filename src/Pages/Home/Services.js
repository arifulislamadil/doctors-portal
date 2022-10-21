import React from 'react';
import Service from './Service';
import floride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const services = () => {
    const services = [
        {
            _id: 1,
            name: "Florida treatment",
            description: "",
            img: floride
        },
        {
            _id: 2,
            name: "Cavity Feeling",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "whitening treatment",
            description: "",
            img: whitening
        },
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-xl uppercase'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default services;