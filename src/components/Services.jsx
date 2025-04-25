import React from 'react';
import l1 from '../assets/success-doctor.png'
import l2 from '../assets/success-patients.png'
import l3 from '../assets/success-review.png'
import l4 from '../assets/success-staffs.png'
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div>
            <div className="text-center pt-4 md:pb-4">
                <div className="max-w-[50vw] mx-auto">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">We Provide Best Law Services</h1>
                    <p className="mb-5">Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                <div className="card border shadow-lg flex items-center">
                    <div className="card-body">
                        <img src={l1} className='w-20' />
                        <h2 className="card-title md:text-4xl"><CountUp end={199} duration={5}></CountUp>+</h2>
                        <p>Total Lawyer</p>
                    </div>
                </div>
                <div className="card border shadow-lg flex items-center">
                    <div className="card-body">
                        <img src={l2} className='w-20' />
                        <h2 className="card-title md:text-4xl"><CountUp end={1900} duration={5}></CountUp>+</h2>
                        <p>Cases Initiated</p>
                    </div>
                </div>
                <div className="card border shadow-lg flex items-center">
                    <div className="card-body">
                        <img src={l3} className='w-20' />
                        <h2 className="card-title md:text-4xl"><CountUp end={467} duration={5}></CountUp>+</h2>
                        <p>Total Reviews</p>
                    </div>
                </div>
                <div className="card border shadow-lg flex items-center">
                    <div className="card-body">
                        <img src={l4} className='w-20' />
                        <h2 className="card-title md:text-4xl"><CountUp end={300} duration={5}></CountUp>+</h2>
                        <p>Total Stuffs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;