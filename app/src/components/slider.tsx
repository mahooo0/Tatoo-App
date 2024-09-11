import React, { useState } from 'react';

interface SliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (e: any, zoom: any) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
    const [currentValue, setCurrentValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setCurrentValue(newValue);
        onChange(e, newValue);
    };

    return (
        <div className="w-full">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
        </div>
    );
};

export default Slider;
