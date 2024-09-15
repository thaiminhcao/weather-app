// import Image from "next/image";
// import { ForecastResponse } from "../app/api/foreCast/response";
// import { TempC } from ".";
// import { DayOfWeek } from "@/enum/enum";

// type DataResponse = { data: ForecastResponse | null };

export const Hero = () => {
  // const time = new Date(weatherData.data?.location.localtime ?? "");

  // const currentTime = time.getHours() + "h:" + time.getMinutes() + "p ";

  // const currentDayWord = DayOfWeek[time.getDay() as keyof typeof DayOfWeek];

  // const currentDay =
  // time.getDay() + "/" + time.getMonth() + "/" + time.getFullYear();

  return (
    <div>
      {/* <Image
        src={`https:${weatherData?.data?.current?.condition?.icon}`}
        width={68}
        height={68}
        alt="weather icon"
      />
      {weatherData?.data?.current?.condition?.text}

      <TempC temp_c={weatherData?.data?.current?.temp_c ?? 0} />

      <div>Hôm nay </div>
      <div>{currentDayWord}</div>
      <div>{currentTime}</div>
      <div>{currentDay}</div> */}
    </div>
  );
};
