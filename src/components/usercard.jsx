// cart/Usercard.jsx
import React from 'react';

const Usercard = ({ profilePhoto, name, mail, phoneNumber, address }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-3">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{mail}</p>
      <p className="text-gray-600 text-sm">{phoneNumber}</p>
      <p className="text-gray-600 text-sm text-center">{address}</p>
    </div>
  );
};

export default Usercard;
