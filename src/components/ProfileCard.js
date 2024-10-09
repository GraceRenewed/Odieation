// import { Button } from 'bootstrap'
// import Link from 'next/link'
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProfileCard({ profileObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={profileObj.picture.medium} alt={profileObj.name.first} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>
          {profileObj.name.first} {profileObj.name.last}{' '}
        </Card.Title>
        <p>{profileObj.location.country}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        {/* <Link href={`/book/${profileObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link> */}
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        {/* <Link href={`/book/edit/${profileObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisBook} className="m-2">
          DELETE
        </Button> */}
      </Card.Body>
    </Card>
  );
}

ProfileCard.propTypes = {
  profileObj: PropTypes.shape({
    picture: PropTypes.shape({
      medium: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    location: PropTypes.shape({
      country: PropTypes.string,
    }),
  }).isRequired,
};
