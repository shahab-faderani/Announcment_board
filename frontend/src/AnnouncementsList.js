import React from "react";
import Announcement from "./Announcement";

const AnnouncementsList = ({ announcements, handleDeleteAnnouncement }) => {
  return (announcements.map((announcement) => {
    return (
      <Announcement
        key={announcement.uuid}
        announcement={announcement}
        handleDeleteAnnouncement={handleDeleteAnnouncement}
      />
    );
  })).reverse();
};
export default AnnouncementsList;
