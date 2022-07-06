import React from "react";

const AnnouncementsFilter = ({ setFilterKey, filterKey}) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <button className={filterKey === "all" ? "active" : ""} onClick={() => setFilterKey("all")} >All</button>
      <button className={filterKey === "today" ? "active" : ""} onClick={() => setFilterKey("today")} >Today</button>
      <button className={filterKey === "last7Days" ? "active" : ""} onClick={() => setFilterKey("last7Days")}>Last 7 Days</button>
      <button className={filterKey === "last30Days" ? "active" : ""} onClick={() => setFilterKey("last30Days")}>Last 30 Days</button>
    </div>
  );
};

export default AnnouncementsFilter;
