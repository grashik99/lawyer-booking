import React, { useContext, useState } from 'react';
import { LawyerContext } from '../layouts/HomeLayouts';
import LawyerCard from './LawyerCard';

const Lawyers = () => {
    const { lawyers } = useContext(LawyerContext)

    const [show, setShow] = useState(6)
    const showAllLawyers = () => {
        setShow(show + show)
        document.getElementById('showButton').classList.add('hidden')
    }

    return (
        <div>
            <div className="text-center pt-4 md:pb-4">
                <div className="max-w-[70vw] mx-auto">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Our Best Lawyers</h1>
                    <p className="mb-5">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    lawyers.slice(0, show).map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>)
                }
            </div>
            <div className='text-center pt-6'>
                <button className="btn text-xl font-bold shadow-xl shadow-amber-300" onClick={showAllLawyers} id='showButton'>Show All Lawyers</button>
            </div>
        </div>
    );
};

export default Lawyers;