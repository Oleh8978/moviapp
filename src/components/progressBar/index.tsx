import React, { useEffect, useState, useRef } from 'react';

interface IProps {
    size: number,
    progress: number,
    strokeWidth: number,
    circleOneStroke: string,
    circleTwoStroke: string
}

const ProgressBar: React.FC<IProps>  = (props) => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        if (circleRef.current) 
        // @ts-ignore
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <div className='progress-wrapper'>
                        <svg
                className="svg"
                width={size}
                height={size}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text 
                    x={`${center}`} 
                    y={`${center + 5}`} 
                    className="svg-circle-text">
                        {progress}%
                </text>
            </svg>
        </div>
    );
}

export default ProgressBar;