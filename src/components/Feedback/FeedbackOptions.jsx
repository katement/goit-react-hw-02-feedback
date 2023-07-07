import React from 'react';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(el => (
        <button key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};
