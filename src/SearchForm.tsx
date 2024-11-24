import React, { useState } from 'react';
import '@ionic/core';
import 'ionicons';


interface SearchFormProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-4/5 md:w-3/5 lg:w-[35%] items-center justify-center gap-2">
      <input
        type="text"
        name="city"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter a city..."
        required
        className="py-2 px-3 w-full rounded-full bg-white text-white text-lg outline outline-2 backdrop-blur-lg ease-in-out duration-300 outline-white/70 focus:bg-white/20"
      />
      <button type="submit">
      <ion-icon className="text-white font-black text-2xl p-3 bg-white/50 rounded-full" name="search" />

        </button>
    </form>
  );
};

export default SearchForm;
