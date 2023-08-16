import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size , color }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderTopColor: color,
  };

  return <div className="spinner" style={spinnerStyle} />;
};

export default Spinner;
