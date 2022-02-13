import React, { useEffect, useState, useRef } from 'react';

// custom hooks 
import useWindowDimensions from '../../hooks/windwoSizeHook';

interface IProps {
    size: number,
    progress: number,
    strokeWidth: number,
    circleOneStroke: string,
    circleTwoStroke: string,
    customClass?: string,
    customTextClass?: string,
    customPudding?: number
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

    const { width, height } = useWindowDimensions()

    const modifiedSize =  width > 950 ? size : size - 14

    const center = modifiedSize / 2;
    const radius = modifiedSize / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const puddingText = () => {

        if (props.customPudding) {
            return width > 950 ? props.customPudding : props.customPudding - 8
        }

        return width > 950 ? center + 5 : center + 2
    }

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        if (circleRef.current) 
        // @ts-ignore
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <div className={`${'progress-wrapper'} ${props.customClass ? props.customClass : ""}`}>
            <svg
                className="svg"
                width={modifiedSize}
                height={modifiedSize}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={width > 950 ? strokeWidth : strokeWidth / 2}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    transform={`rotate(-90 ${modifiedSize / 2} ${modifiedSize / 2})`}
                    strokeWidth={width > 950 ? strokeWidth : strokeWidth / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text 
                    x={`${center}`} 
                    y={`${puddingText()}`} 
                    className={`${"svg-circle-text"} ${props.customTextClass ? props.customTextClass : ''}`}>
                        {progress}%
                </text>
            </svg>
        </div>
    );
}

export default ProgressBar;