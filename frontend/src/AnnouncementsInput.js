import React from "react";

const AnnouncementsInput = ({
  announcementText,
  username,
  setAnnouncementText,
  setUserNametext,
  handleCreateAnnouncement,
  isCreateButtonDisabled,
  setCreateButtonDisable
  
}) => {
  return (
    <div className="announcement" style={{ display: "flex", gap: "10px" }}>
      <input
        placeholder="Input an announcement..."
        value={announcementText}
        onChange={(e) => {
          setAnnouncementText(e.target.value)
          if (e.target.value.trim().length === 0){
            setCreateButtonDisable(true)
          } else {
            setCreateButtonDisable(false)
          }
          
        }}
        style={{ width: "230px" }}
      />
      <input className="username"
        placeholder="Input your name"
        value={username}
        onChange={(e) => setUserNametext(e.target.value)}
        style={{ width: "100px" }}
      />
      <button disabled={isCreateButtonDisabled} style={{ width: "60px"  }} onClick={handleCreateAnnouncement}>
        Create
      </button>
    </div>
    
  );
};

export default AnnouncementsInput;
