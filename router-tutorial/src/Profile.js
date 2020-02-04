import React from "react";

const data = {
  jason: {
    name: "전판근",
    description: "리액트를 공부하는 학생"
  },
  hufs: {
    name: "한국외대",
    desccription: "한국외국어대학교"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
