'use client';
import React from 'react';
import NewArrival from '../home-content/new';

const About = () => {
  return (
    <div style={{ padding: '7rem 7% 0 7%' }}>
      <p className="text-2xl font-extrabold mb-10">About Page</p>
      <div style={{ display: 'flex', gap: '1rem', position: 'relative', width: '100%' }}>
        <NewArrival />
      </div>
    </div>
  );
};

export default About;
