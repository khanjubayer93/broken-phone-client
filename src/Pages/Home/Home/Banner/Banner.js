import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/GzJKV2oVjdVL75suxN4Ate.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Broken Phone</h1>
                    <p className="mb-5">Mobile phones at best price only on Broken Phones, the largest marketplace in Bangladesh. Get new and used branded smartphones, android phones</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;