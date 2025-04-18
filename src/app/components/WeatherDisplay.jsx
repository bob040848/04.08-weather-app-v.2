import { MapPin, Home, Heart, User } from "lucide-react";
import { SemiCircle } from "./SemiCircle";
import { Loading } from "./Loading";

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
    <div className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center w-[512px] h-[512px] z-0">
        <div className="absolute w-[512px] h-[512px] rounded-full border border-gray-300 opacity-30" />
        <div className="absolute w-[432px] h-[432px] rounded-full border border-gray-300 opacity-30" />
        <div className="absolute w-[352px] h-[352px] rounded-full border border-gray-300 opacity-30" />
        <div className="absolute w-[272px] h-[272px] rounded-full border border-gray-300 opacity-30" />
        <div className="absolute w-[192px] h-[192px] rounded-full border border-gray-300 opacity-30" />
        <SemiCircle />
      </div>

      <div className="absolute flex justify-between w-full max-w-5xl z-10 px-8">
        <div className="absolute -top-12 -left-5 w-24 h-24 rounded-full overflow-hidden bg-orange-400 shadow-2xl" />

        <div className="relative flex flex-col items-center w-64 bg-white/75 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-[10.5px] z-20">
          {weather ? (
            <>
              <div className="self-start mb-2 ml-2">
                <p className="text-xs text-gray-500">{getCurrentDate()}</p>
              </div>
              <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                  {city.toUpperCase()}
                </h1>
                <MapPin className="w-4 h-4 ml-2 text-gray-500" />
              </div>
              <img src="/images/sun.png" alt="Day" className="w-50 h-50 mb-4" />
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-black">
                {weather.forecast.forecastday[0].day.maxtemp_c}°
              </p>
              <p className="text-xs text-yellow-600 mt-2 ml-2 font-extrabold">
                {weather.current.condition.text}
              </p>
              <div className="flex space-x-4 mt-4">
                <Home className="w-6 h-6 text-black" />
                <MapPin className="w-6 h-6 text-gray-400" />
                <Heart className="w-6 h-6 text-gray-400" />
                <User className="w-6 h-6 text-gray-400" />
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-[300px]">
              <Loading />
            </div>
          )}
        </div>

        <div className="absolute -bottom-12 -right-5 w-24 h-24 rounded-full overflow-hidden bg-blue-400 shadow-2xl " />
        <div className="relative flex flex-col items-center w-64 bg-[#111827]/75 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-2xl z-20">
          {weather ? (
            <>
              <div className="self-start mb-2 ml-2">
                <p className="text-xs text-gray-400">{getCurrentDate()}</p>
              </div>
              <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold text-white">
                  {city.toUpperCase()}
                </h1>
                <MapPin className="w-4 h-4 ml-2 text-gray-400" />
              </div>
              <img
                src="/images/moon.png"
                alt="Night"
                className="w-50 h-50 mb-4"
              />
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-black">
                {weather.forecast.forecastday[0].day.mintemp_c}°
              </p>
              <p className="text-xs text-yellow-600 mt-2 ml-2 font-extrabold">
                {weather.current.condition.text}
              </p>
              <div className="flex space-x-4 mt-4">
                <Home className="w-6 h-6 text-white" />
                <MapPin className="w-6 h-6 text-gray-400" />
                <Heart className="w-6 h-6 text-gray-400" />
                <User className="w-6 h-6 text-gray-400" />
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-[300px]">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
