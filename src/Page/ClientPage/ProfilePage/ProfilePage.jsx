import React from "react";
import BackGroundProfile from "./Components/BackGroundProfile";
import ContentProfile from "./Components/ContentProfile";
const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <main className="profile-page">
        <ContentProfile />
      </main>
    </div>
  );
};

export default ProfilePage;
