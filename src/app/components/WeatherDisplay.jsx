import { MapPin, Home, Heart, User } from "lucide-react";

export const WeatherDisplay = ({ city, weather }) => {
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex justify-center items-center space-x-8 relative ">
      <div className="relative  flex flex-col items-center w-64 backdrop-blur-md shadow-lg  bg-white/75 rounded-[10.5]">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-orange-400 rounded-full opacity-50 z-[-1]"></div>
        <div className="self-start mb-2">
          <p className="text-xs text-gray-500">{getCurrentDate()}</p>
        </div>

        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {city.toUpperCase()}
          </h1>
          <MapPin className="w-4 h-4 ml-2 text-gray-500 relative top-[-2px]" />
        </div>

        {weather ? (
          <>
            <img src="/images/sun.png" alt="Day" className="w-50 h-50 mb-4" />
            <p className="text-transparent bg-clip-text font-extrabold text-5xl -mt-2 bg-gradient-to-b from-white to-black self-baseline">
              {weather.forecast.forecastday[0].day.maxtemp_c}°
            </p>
            <p className="text-xs text-yellow-600 mt-2 self-start ml-2 text-shadow-2xs  font-extrabold">
              {weather.current.condition.text}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}

        <div className="flex space-x-4 mt-4">
          <Home className="w-6 h-6 text-black" />
          <MapPin className="w-6 h-6 text-gray-400" />
          <Heart className="w-6 h-6 text-gray-400" />
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <div className="relative flex justify-center items-center w-128 h-128">
        <div className="absolute w-128 h-128 rounded-full border border-gray-300 opacity-30 z-10"></div>
        <div className="absolute w-108 h-108 rounded-full border border-gray-300 opacity-30"></div>
        <div className="absolute w-88 h-88 rounded-full border border-gray-300 opacity-30"></div>
        <div className="absolute w-68 h-68 rounded-full border border-gray-300 opacity-30"></div>
        <div className="absolute w-48 h-48 rounded-full border border-gray-300 opacity-30"></div>

        <img src="/images/vector-left.png" alt="left-v" className="w-12 h-12" />
        <img
          src="/images/vector-right.png"
          alt="right-v"
          className="w-12 h-12"
        />
      </div>

      <div className="relative flex flex-col items-center w-64 backdrop-blur-md shadow-lg bg-[#111827]/75  rounded-2xl ">
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-400 rounded-full opacity-50 z-[-1]"></div>

        <div className="self-start mb-2">
          <p className="text-xs text-gray-400">{getCurrentDate()}</p>
        </div>

        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            {city.toUpperCase()}
          </h1>
          <MapPin className="w-4 h-4 ml-2 text-gray-400 relative top-[-2px]" />
        </div>

        {weather ? (
          <>
            <img
              src="/images/moon.png"
              alt="Night"
              className="w-50 h-50 mb-4"
            />
            <p className="text-transparent bg-clip-text font-extrabold text-5xl -mt-2 bg-gradient-to-b from-white to-black self-baseline">
              {weather.forecast.forecastday[0].day.mintemp_c}°
            </p>
            <p className="text-xs text-yellow-600 mt-2 self-start ml-2 text-shadow-2xs font-extrabold">
              {weather.current.condition.text}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-400">Loading...</p>
        )}

        <div className="flex space-x-4 mt-4  items-center justify-between">
          <Home className="w-6 h-6 text-white" />
          <MapPin className="w-6 h-6 text-gray-400" />
          <Heart className="w-6 h-6 text-gray-400" />
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};
