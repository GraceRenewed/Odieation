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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {profiles.map((profile) => (
          <ProfileCard profileObj={profile} />
        ))}
      </div>
    </div>
  );
}

export default Home;
