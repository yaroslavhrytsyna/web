import React from 'react';
import { Club } from '../types';

interface ClubCardProps {
  club: Club;
}

function ClubCard({ club }: ClubCardProps) {
  return (
    <div className="club-card">
      <h3>{club.name}</h3>
      <p>{club.description}</p>
      <div className="club-info">
        <div>Age Range: {club.ageRange}</div>
        <div>Price: ${club.price}/month</div>
        <div>Location: {club.location}</div>
        <div>Category: {club.category}</div>
      </div>
      <div className="club-actions">
        <button className="primary">Learn More</button>
        <button className="secondary">Contact</button>
      </div>
    </div>
  );
}

export default ClubCard;