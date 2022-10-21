import React from 'react';

const review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
                <div className='flex items-center'>
                    <div className='mr-4 ml-2'>
                        <img src={review.img} className="w-16" lt=""/>
                    </div>
                    <div>
                        <h3>{review.name}</h3>
                        <h4>{review.address}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default review;