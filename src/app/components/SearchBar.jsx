"use client";

import { useEffect, useRef } from "react";
import { MapPin, Search } from "lucide-react";

export const SearchBar = ({
  input,
  onInputChange,
  suggestions,
  onSuggestionClick,
}) => {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onSuggestionClick(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onSuggestionClick]);

  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-xs" ref={searchRef}>
        <div className="relative flex items-center  ">
          <Search className="absolute left-4 w-5 h-5 text-gray-400 " />
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={onInputChange}
            className="w-full pl-12 pr-4 py-2 bg-white border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder-gray-400 "
          />
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto ">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                {suggestion.city}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
