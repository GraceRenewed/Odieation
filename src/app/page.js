'use client';

import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import getProfiles from '../api/profileData';
import ProfileCard from '../components/ProfileCard';

function Home() {
  const [profiles, SetProfiles] = useState([]);

  const getAllProfiles = () => {
    getProfiles().then(SetProfiles);
  };
  useEffect(() => {
    getAllProfiles();
  }, []);

  console.warn(getProfiles());
  return (
    <div>
      <NavBar />
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard profileObj={profile} />
        ))}
      </div>
    </div>
  );
}

export default Home;
