import React, { useState } from 'react';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send booking information to backend server
    console.log(`Name: ${name}, Email: ${email}, Date: ${date}, Time: ${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />
      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
}
