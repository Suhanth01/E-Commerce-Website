import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Spinner = () => {
    return (
        <div>
            <PropagateLoader color="#e06e2a" className='text-center my-10 text-xl' />
        </div>
    );
};

export default Spinner;