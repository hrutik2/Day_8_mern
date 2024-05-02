import React, { useState, useRef } from 'react';

const UserForm = () => {
 
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

 
  const emailRef = useRef();

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (newName.length < 3) {
      setNameError('Name must be at least 3 characters long.');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
