import React, { useState, useEffect, useMemo } from 'react';

const Blob = ({ color, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const size = useMemo(() => Math.floor(Math.random() * (300 - 100) + 100), []);
    const delay = useMemo(() => Math.random() * 5000, []);

    useEffect(() => {
        const moveBlob = () => {
            const newX = Math.random() * 100;
            const newY = Math.random() * 100;
            setPosition({ x: newX, y: newY });
        };

        moveBlob(); // Initial position
        const interval = setInterval(moveBlob, 5000 + delay);

        return () => clearInterval(interval);
    }, [delay]);

    return (
        <div
            className={`absolute ${color} rounded-full blur-3xl opacity-20 transition-all duration-[5000ms] ease-in-out`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${position.x}%`,
                top: `${position.y}%`,
                animationDelay: `${delay}ms`,
                zIndex: index,
            }}
        ></div>
    );
};

const BackgroundBlobs = () => {
    const colors = [
        'bg-custom-yellow',
        'bg-custom-red',
        'bg-custom-orange',
        'bg-custom-blue',
        'bg-custom-violet',
        'bg-custom-green'
    ];

    const blobCount = 15; // Increased number of blobs

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {Array.from({ length: blobCount }).map((_, index) => (
                <Blob 
                    key={index} 
                    color={colors[index % colors.length]} 
                    index={index}
                />
            ))}
        </div>
    );
};

export default BackgroundBlobs;