import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Club } from '../types';
import { StarIcon, UserGroupIcon } from '@heroicons/react/24/solid';

interface ClubCardProps {
  club: Club;
}

function ClubCard({ club }: ClubCardProps) {
  const navigate = useNavigate();

  return (
    <div className="club-card">
      <img src={club.imageUrl} alt={club.name} className="club-image" />
      <h3>{club.name}</h3>
      <p>{club.description}</p>
      <div className="club-info">
        <div>Age Range: {club.ageRange}</div>
        <div>Price: ${club.price}/month</div>
        <div>Location: {club.location}</div>
        <div>Category: {club.category}</div>
        <div className="rating">
          <StarIcon className="icon" />
          <span>{club.rating}</span>
        </div>
        <div className="capacity">
          <UserGroupIcon className="icon" />
          <span>{club.enrolledCount}/{club.capacity}</span>
        </div>
      </div>
      <div className="club-actions">
        <button className="primary" onClick={() => navigate(`/clubs/${club.id}`)}>
          Learn More
        </button>
        <button className="secondary">Contact</button>
      </div>
    </div>
  );
}

export default ClubCard;