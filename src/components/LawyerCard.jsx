import React from 'react';
import { Link } from 'react-router';

const LawyerCard = ({lawyer}) => {
    const {image, available_day, experience, name, specialty, license_number} = lawyer;

    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const available = available_day.find(day => day === dayName);

    

    return (
        <div className='md:flex gap-4 border rounded-xl p-4 shadow-xl'>
            <div className='flex justify-center mb-4 md:mb-0'>
                <img src={image} className='max-w-46 max-h-52 rounded-xl shadow-xl' />
            </div>
            <div className='w-full relative'>
                <div className='flex justify-between mb-2'>
                    <button className={`btn btn-sm ${available?"bg-green-500 text-white":"bg-red-500 text-white"}`}>{available ? "Available" : "Not Available"}</button>
                    <button className="btn btn-sm">{experience}</button>
                </div>
                <h1 className="text-xl font-black mb-2">{name}</h1>
                <p className='btn btn-sm text-xl mb-2 shadow border-2'>{specialty}</p>
                <p className='mb-2 md:mb-0'>REG NO : <span className='underline'>{license_number}</span></p>
                <Link to={`/details/${license_number}`} className='btn rounded-full w-full md:absolute md:bottom-0 text-xl'>View Details</Link>
            </div>
        </div>
    );
};

export default LawyerCard;