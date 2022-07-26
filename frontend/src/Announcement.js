import React from "react";
import { format } from 'date-fns'

const Announcement = ({
  handleDeleteAnnouncement,
  announcement: { content, username, date, uuid },
}) => {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        width: "400px",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "10px"
      }}
    >
      <div className ="content" key={uuid}>{content}</div>
      <br />
      <div className ="username Date" style={{
        direction: "rtl"
      }}>{username + " on " + format(Date.parse(date),"yyyy-MM-dd") + (username == "anonymous" ? "" : "-") }</div>
      <br />
      <button onClick={() => handleDeleteAnnouncement(uuid)}>Delete</button>
    </div>
  );
};

export default Announcement;
