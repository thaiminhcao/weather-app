// import { Forecastday } from "@/app/api/foreCast/response";
import React from "react";

export const Alert = ({ props }: { props: null }) => {
  if (!props) {
    return <></>;
  }
  // const { day } = props;

  const row2 = [
    // day.condition.text,
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <div className="w-full h-[50px] relative flex justify-center items-center">
      <div className="w-full h-fit flex flex-col justify-center items-center overflow-hidden select-none">
        <h5
          className=" flex flex-shrink-0 items-center justify-around whitespace-nowrap w-full"
          style={{
            animationDirection: "reverse",
            animationDelay: "-3s",
          }}
        >
          {row2.map((el) => (
            <div
              key={el}
              className="grid w-[clamp(10rem, 1rem + 40vmin, 30rem)] place-items-center p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]"
            >
              {el}&nbsp;
            </div>
          ))}
        </h5>
      </div>
    </div>
  );
};
