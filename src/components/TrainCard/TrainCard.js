import React from "react";
import { Link } from "react-router-dom";

const TrainCard = ({ train }) => {
  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display other train details */}
      <Link to={`/trains/${train.trainNumber}`}>View Details</Link>
    </div>
  );
};

export default TrainCard;
