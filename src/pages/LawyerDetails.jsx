import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { LawyerContext } from '../layouts/HomeLayouts';

const LawyerDetails = () => {
    const { id } = useParams();

    const { lawyers } = useContext(LawyerContext);

    const lawyer = lawyers.find(law => law.license_number === id);

    const { image, experience, name, specialty, available_day, license_number, fee } = lawyer;

    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const available = available_day.find(day => day === dayName);

    // console.log(id, lawyers, lawyer)

    return (
        <div>
            <div className="w-11/12 mx-auto mt-4 text-center pt-4 md:pb-4 border rounded-2xl">
                <div className="max-w-[70vw] mx-auto">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Our Best Lawyers</h1>
                    <p className="mb-5">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>

            <div className="w-11/12 mx-auto my-4 rounded-2xl border p-4 hellohero bg-base-200">
                <div className="hellohero-content flex gap-4 flex-col md:flex-row">
                    <img src={image} className="max-w-[20vw] min-h-[260px] rounded-lg shadow-2xl" />
                    <div className='w-full relative'>
                        <button className="btn btn-small px-6 rounded-full shadow mb-3">{experience}</button>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{name}</h1>
                        <div className='mb-3'>
                            <h1 className="btn btn-sm rounded-full px-4 mr-6 text-xl shadow-xl">{specialty}</h1>
                            <h1 className="btn btn-sm rounded-full px-4 mr-6 text-xl shadow-xl">{license_number}</h1>
                        </div>
                        <div className='mb-3 border-2 p-2 rounded-2xl w-fit'>
                            {
                                available_day ? (
                                    available_day.map(x => <button className='btn btn-sm rounded-full px-4 mr-2 text-xl shadow-xl'>{x}</button>)
                                ) : ("")
                            }
                        </div>
                        <div className='my-3'>
                            <button className="btn w-full shadow-lg shadow-amber-300 text-xl font-bold absolute bottom-0">Consultation Fee: {fee} Taka</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerDetails;