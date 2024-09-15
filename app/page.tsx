import Game30s from "@/components/Game30s";
// import { ForecastResponse } from "./api/foreCast/response";

// type DataResponse = { data: ForecastResponse | null };

export default async function Home() {
  // const weatherData = (await res.json()) as DataResponse;
  return (
    <div className="rounded-md border-solid border-2 border-[#dfe0eb] mt-10 p-10 bg-[#74aede]">
      <Game30s />
    </div>
  );
}
