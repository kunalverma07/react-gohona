/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar, Content } from "../../components/index";

const Dashboard = () => {
  return (
    <>
      <div className="admin__Container">
        <Sidebar />
        <div className="admin__Content">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
