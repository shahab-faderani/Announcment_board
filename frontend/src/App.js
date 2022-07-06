import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import AnnouncementsFilter from "./AnnouncementsFilter";
import AnnouncementsInput from "./AnnouncementsInput";
import AnnouncementsList from "./AnnouncementsList";
import React, { Component } from 'react'; 

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState("");
  const [userName, setUserNametext] = useState("");
  const [filterKey, setFilterKey] = useState("all");
  const [isCreateButtonDisabled, setCreateButtonDisable] = useState(true);
  
  // use Effect
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3001/announcements");
      let announcements = await result.json();
      setAnnouncements(announcements);
    };

    fetchData();
  }, []);

  //handlers
  const handleDeleteAnnouncement = async (uuid) => {
    const result = await fetch(`http://localhost:3001/announcements/${uuid}`, {
      method: "DELETE",
    });
    let newAnnouncements = await result.json();
    setAnnouncements(newAnnouncements);
  };

  const handleCreateAnnouncement = async () => {
    let data = {
      content: announcementText,
      date: new Date(),
      userName: userName === "" ? "anonymous" : userName
    };

    const result = await fetch(`http://localhost:3001/announcements`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let newAnnouncements = await result.json();
    if (result.status == "200"){
      setAnnouncements(newAnnouncements)
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
        userName={userName}
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
