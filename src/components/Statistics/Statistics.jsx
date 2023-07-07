import React from 'react';

export const Statistics = ({ stats, totalStats, positiveFeedbacks }) => {
  return (
    <div>
      <ul>
        {Object.keys(stats).map(el => (
          <li key={el}>
            {el}: {stats[el]}
          </li>
        ))}
      </ul>
      <h2>Total: {totalStats}</h2>
      <h2>Positive feedbacks: {positiveFeedbacks}%</h2>
    </div>
  );
};
