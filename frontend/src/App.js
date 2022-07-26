import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import AnnouncementsFilter from "./AnnouncementsFilter";
import AnnouncementsInput from "./AnnouncementsInput";
import AnnouncementsList from "./AnnouncementsList";
import React, { Component } from 'react'; 

// NODE_ENV = 'development' 
// NODE_ENV = 'production' 

const baseURL = process.env.NODE_ENV === 'production' ? "api/v1/announcements" : "http://localhost:3001/api/v1/announcements";

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState("");
  const [username, setUserNametext] = useState("");
  const [filterKey, setFilterKey] = useState("all");
  const [isCreateButtonDisabled, setCreateButtonDisable] = useState(true);
  
  // use Effect
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(baseURL);
      let announcmens_json = await result.json();
      setAnnouncements(announcmens_json.data.announcements)
    };

    fetchData();
  }, []);

  //handlers
  const handleDeleteAnnouncement = async (uuid) => {
    const result = await fetch(`${baseURL}/${uuid}`, {
      method: "DELETE"
    });
    let deleted_announcement = await result.json();

    if (deleted_announcement.status == "success") {
      var _announcements = announcements;
      console.log(deleted_announcement)
      setAnnouncements(_announcements.filter(({ uuid }) => uuid != deleted_announcement.uuid));
    }
    
  };

  const handleCreateAnnouncement = async () => {
    let data = {
      content: announcementText,
      date: new Date(),
      username: username === "" ? "anonymous" : username
    };

    const result = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let announcment_json = await result.json();
    if (announcment_json.status == "success"){
      var _announcements = announcements;
      _announcements.push(announcment_json.data.announcement)
      setAnnouncements(_announcements)
      setAnnouncementText("");
      setUserNametext("");
      setCreateButtonDisable(true)
    }
    
  };

 

  const filterAnnouncements = (filterKey) => {
    switch (filterKey) {
      case "all":
      default:
        return announcements;
      case "today":
        return announcements.filter(({ date }) => differenceInDays(new Date(),Date.parse(date)) <1)
      case "last7Days":
        return announcements.filter(({ date }) => differenceInDays(new Date(),Date.parse(date)) <8);
      case "last30Days":
        return announcements.filter(({ date }) => differenceInDays(new Date(),Date.parse(date)) <31);
    }
  };

  return (
    <div className="App">
      <AnnouncementsInput
        announcementText={announcementText}
        setAnnouncementText={setAnnouncementText}
        username={username}
        setUserNametext={setUserNametext}
        handleCreateAnnouncement={handleCreateAnnouncement}
        isCreateButtonDisabled={isCreateButtonDisabled}
        setCreateButtonDisable={setCreateButtonDisable}

      />
      <AnnouncementsFilter 
        filterKey= {filterKey}
        setFilterKey={setFilterKey} 
      />
      <AnnouncementsList
        announcements={filterAnnouncements(filterKey)}
        handleDeleteAnnouncement={handleDeleteAnnouncement}
      />
    </div>
  );
}

export default App;
