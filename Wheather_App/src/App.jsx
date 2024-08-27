import Temperature from "./components/Temperature";
import HighLights from "./components/HighLights";
import { useEffect, useState } from "react";

export default function App() {
  const [city, setCity] = useState("Mumbai");
  const [wheatherData, setWheatherData] = useState(null);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=024ba678ee2047da8af130205240302&q=${city}&aqi=no`;
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setWheatherData(data);
    })
    .catch((e) => {
      console.log(e);
    });

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWheatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className="bg-[#253949] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3 ">
        {wheatherData && (
          <Temperature
            setCity={setCity}
            stats={{
              temp: wheatherData.current.temp_c,
              condition: wheatherData.current.condition.text,
              isDay: wheatherData.current.is_day,
              location: wheatherData.location.name,
              time: wheatherData.location.localtime,
            }}
          />
        )}
      </div>
      <div className="mt-40 w-1/5 h-1/3 grid grid-cols-2 gap-6">
        <h2 className="text-[#c3e4f3] text-2xl col-span-2">
          Today's HighLight
        </h2>
        {wheatherData && (
          <>
            <HighLights
              stats={{
                title: "Wind Status",
                value: wheatherData.current.wind_mph,
                unit: "Mph",
                direction: wheatherData.current.wind_dir,
              }}
            />
            <HighLights
              stats={{
                title: "Humidity",
                value: wheatherData.current.humidity,
                unit: "%",
              }}
            />
            <HighLights
              stats={{
                title: "Visibility",
                value: wheatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <HighLights
              stats={{
                title: "Cloud",
                value: wheatherData.current.cloud,
                unit: "%",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
