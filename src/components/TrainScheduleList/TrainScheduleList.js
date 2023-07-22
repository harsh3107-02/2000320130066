import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainCard from "../TrainCard/TrainCard";

const TrainScheduleList = () => {
  const [trainSchedule, setTrainSchedule] = useState([]);

  useEffect(() => {
    const fetchTrainSchedule = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144:80/train/trains"
        );
        // Assuming the response contains an array of trains
        setTrainSchedule(response.data);
      } catch (error) {
        console.error("Error fetching train schedule:", error);
      }
    };

    fetchTrainSchedule();
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      {trainSchedule.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default TrainScheduleList;
