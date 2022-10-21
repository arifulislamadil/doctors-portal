import React from 'react';
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: "windon herry",
            review: "",
            img: people1,
            address: "California",
        },
        {
            _id:2,
            name: "windon herry",
            review: "",
            img: people2,
            address: "California",
        },
        {
            _id:3,
            name: "windon herry",
            review: "",
            img: people3,
            address: "California",
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h3 className='text-3xl'>What our patients say</h3>
                </div>
                <div>
                    <img src={quote} className="sm:w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {
                reviews.map(review=><Review key={review._id} review={review}></Review>)
               }     
            </div>
        </section>
    );
};

export default Testimonials;