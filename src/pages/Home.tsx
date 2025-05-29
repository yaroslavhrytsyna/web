import React from 'react';
import FeaturedClubs from '../components/FeaturedClubs';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="home">
      <section className="hero">
        {isAuthenticated ? (
          <h1>Welcome back, {user?.name}!</h1>
        ) : (
          <h1>Find the Perfect Club for Your Child</h1>
        )}
        <p>Discover amazing activities and clubs that will help your child grow and learn!</p>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search by activity, location, or age group" 
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </section>

      <FeaturedClubs />

      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          {['Sports', 'Art', 'Music', 'Science', 'Dance', 'Languages'].map(category => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
              <p>Explore {category.toLowerCase()} activities</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;