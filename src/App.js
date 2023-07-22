import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainScheduleList from "./components/TrainScheduleList/TrainScheduleList";
import SingleTrainSchedule from "./components/SingleTrainSchedule/SingleTrainSchedule";
import RegisterCompanyForm from "./components/RegisterCompanyForm/RegisterCompanyForm";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/">
            <TrainScheduleList />
          </Route>
          <Route path="/trains/:trainId">
            {/* <Header/> */}
            <SingleTrainSchedule />
          </Route>
          <Route path="/register">
            <RegisterCompanyForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
