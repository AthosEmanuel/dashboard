import React from "react";
import "./style.css";
import { ApexOptions } from "apexcharts";
import { Scatter, SimpleBar } from "./../../components";

const Home: React.FC = () => {
  return (
    <>
     <div className="TitleColor" style={{backgroundColor: '#B1B1B1'}}>Dashboard</div>
      <div className="HomeContainer">
     

        <Scatter />
        <SimpleBar />
      </div>
    </>
  );
};

export default Home;
