import React from "react";

function Card({ name, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover" 
        />
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
