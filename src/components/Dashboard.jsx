import React, { Component } from "react";

import CardComponent from "./CardComponent";
import PleaseLogin from "./PleaseLogin";

class Dashboard extends Component {
  render() {
    const data = {
      users: {
        newVisits: 5782,
        purchases: 9823,
        activeUsers: 3214,
        returned: 1233,
      },
    };
    const handleLogout = () => {
      localStorage.removeItem("user");
      window.location = "/";
    };
    return (
      <>
        {localStorage.getItem("user") ? (
          <>
            <div className="d-flex justify-content-between m-2">
              <div></div>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className="cards-content">
              <CardComponent data={data.users.newVisits} label="NewVisits" />
              <CardComponent data={data.users.purchases} label="Purchases" />
              <CardComponent data={data.users.activeUsers} label="AciveUsers" />
              <CardComponent data={data.users.returned} label="Returned" />
            </div>
            <div>
            </div>
          </>
        ) : (
          <PleaseLogin />
        )}
      </>
    );
  }
}

export default Dashboard;
