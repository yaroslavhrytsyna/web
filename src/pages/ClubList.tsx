import React, { useState } from 'react';
import ClubCard from '../components/ClubCard';
import { Club } from '../types';

function ClubList() {
  const [clubs] = useState<Club[]>([
    {
      id: 1,
      name: "Little Scientists",
      description: "Fun science experiments for kids",
      ageRange: "6-12",
      price: 50,
      location: "Downtown",
      category: "Science"
    },
    {
      id: 2,
      name: "Art Explorer",
      description: "Creative art classes for children",
      ageRange: "4-10",
      price: 45,
      location: "West End",
      category: "Art"
    }
  ]);

  return (
    <div className="club-list">
      <h2>Available Clubs</h2>
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}

export default ClubList;