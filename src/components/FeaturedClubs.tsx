import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Club } from '../types';
import { StarIcon } from '@heroicons/react/24/solid';

function FeaturedClubs() {
  const [featuredClubs] = React.useState<Club[]>([
    {
      id: 1,
      name: "Little Scientists",
      description: "Fun science experiments for kids",
      ageRange: "6-12",
      price: 50,
      location: "Downtown",
      category: "Science",
      rating: 4.8,
      capacity: 20,
      enrolledCount: 15,
      imageUrl: "https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg",
      schedule: [],
      reviews: []
    },
    {
      id: 2,
      name: "Art Explorer",
      description: "Creative art classes for children",
      ageRange: "4-10",
      price: 45,
      location: "West End",
      category: "Art",
      rating: 4.7,
      capacity: 15,
      enrolledCount: 12,
      imageUrl: "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg",
      schedule: [],
      reviews: []
    },
    {
      id: 3,
      name: "Junior Sports Academy",
      description: "Multi-sport program for kids",
      ageRange: "5-12",
      price: 55,
      location: "Sports Complex",
      category: "Sports",
      rating: 4.9,
      capacity: 25,
      enrolledCount: 20,
      imageUrl: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      schedule: [],
      reviews: []
    }
  ]);

  const navigate = useNavigate();

  return (
    <section className="featured-clubs">
      <h2>Featured Clubs</h2>
      <div className="featured-grid">
        {featuredClubs.map(club => (
          <div key={club.id} className="featured-card" onClick={() => navigate(`/clubs/${club.id}`)}>
            <img src={club.imageUrl} alt={club.name} />
            <div className="featured-content">
              <h3>{club.name}</h3>
              <p>{club.description}</p>
              <div className="featured-info">
                <div className="rating">
                  <StarIcon className="icon" />
                  <span>{club.rating}</span>
                </div>
                <span className="price">${club.price}/month</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedClubs;