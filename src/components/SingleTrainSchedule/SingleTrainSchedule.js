import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTrainSchedule = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchSingleTrain = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144:80/train/trains/${trainId}`
        );
        setTrain(response.data);
      } catch (error) {
        console.error("Error fetching single train:", error);
      }
    };

    fetchSingleTrain();
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.trainName}</h1>
      {/* Display other train details */}
    </div>
  );
};

export default SingleTrainSchedule;
