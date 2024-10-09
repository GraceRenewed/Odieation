'use client';

import NavBar from '../components/NavBar';
import getProfiles from '../api/profileData';

function Home() {
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
        Welcome to Next JS!
      </div>
    </div>
  );
}

export default Home;
