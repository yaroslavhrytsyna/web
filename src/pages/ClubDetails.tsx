import React from 'react';
import { useParams } from 'react-router-dom';
import { Club } from '../types';
import { StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

function ClubDetails() {
  const { id } = useParams();
  const [club, setClub] = React.useState<Club | null>(null);

  React.useEffect(() => {
    // Simulated API call
    const fetchClub = async () => {
      const mockClub: Club = {
        id: 1,
        name: "Little Scientists",
        description: "Fun science experiments for kids",
        ageRange: "6-12",
        price: 50,
        location: "Downtown",
        category: "Science",
        schedule: [
          { id: 1, dayOfWeek: "Monday", startTime: "15:00", endTime: "17:00" },
          { id: 2, dayOfWeek: "Wednesday", startTime: "15:00", endTime: "17:00" }
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            userId: 1,
            userName: "John Doe",
            rating: 5,
            comment: "Amazing club! My kid loves it!",
            date: "2025-03-15"
          }
        ],
        capacity: 20,
        enrolledCount: 15,
        imageUrl: "https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      };
      setClub(mockClub);
    };

    fetchClub();
  }, [id]);

  if (!club) return <div>Loading...</div>;

  return (
    <div className="club-details">
      <div className="club-header">
        <img src={club.imageUrl} alt={club.name} className="club-image" />
        <div className="club-header-info">
          <h1>{club.name}</h1>
          <div className="rating">
            <StarIcon className="icon" />
            <span>{club.rating}</span>
          </div>
        </div>
      </div>

      <div className="club-content">
        <div className="main-info">
          <h2>About the Club</h2>
          <p>{club.description}</p>

          <div className="stats">
            <div className="stat-item">
              <ClockIcon className="icon" />
              <span>Age Range: {club.ageRange}</span>
            </div>
            <div className="stat-item">
              <UserGroupIcon className="icon" />
              <span>Capacity: {club.enrolledCount}/{club.capacity}</span>
            </div>
          </div>

          <h2>Schedule</h2>
          <div className="schedule">
            {club.schedule.map(slot => (
              <div key={slot.id} className="schedule-item">
                <strong>{slot.dayOfWeek}</strong>
                <span>{slot.startTime} - {slot.endTime}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews">
          <h2>Reviews</h2>
          {club.reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="reviewer">{review.userName}</span>
                <div className="rating">
                  <StarIcon className="icon" />
                  <span>{review.rating}</span>
                </div>
              </div>
              <p>{review.comment}</p>
              <span className="date">{review.date}</span>
            </div>
          ))}
        </div>

        <div className="actions">
          <button className="primary">Enroll Now</button>
          <button className="secondary">Contact Club</button>
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;