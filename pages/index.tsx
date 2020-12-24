import React from "react";
import { NextPage } from "next";
import Image from "../src";
import getImage from "../utils/getImage";
import Link from "next/link";

const Startpage: NextPage = () => {
  const [image1] = React.useState(
    getImage(
      "img_1_a58b7701ea.jpg",
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAEBv/EACYQAAIBAwMDBAMAAAAAAAAAAAECAwAEEQUSIQZRYRYiMUEycZH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwT/xAAbEQADAAIDAAAAAAAAAAAAAAAAAQIDIRGh8P/aAAwDAQACEQMRAD8AC9L1We3voZbdDujcMgHOcc8Ux611s/UXSttaXFwYJF3exlzkhvxz9kcHxmjLR4kRrKJEj2ysAS67iPI847/uuh641RPUd6ttZww2cMEapb/IUBNoweO/J+T9msF3TlpPhlVMh9qkVzHeOGids8hlUkEd81VturS0nEEjwkM0S52uQP5VTObW/dg8LP/Z"
    )
  );
  const [image2] = React.useState(
    getImage(
      "img_2_1d7da0c8b5.jpg",
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYHBf/EACYQAAIBAwMDBAMAAAAAAAAAAAECAwAEEQYSMQUTcRQhQWEiMpH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EACcRAAAEBAMJAAAAAAAAAAAAAAABAhEDBBIxBSGBBhQWcYKSsdLi/9oADAMBAAIRAxEAPwBW1LoC60pY2zx3UsjW8YcO2G2sCcc+2Dxz4zU5muZZLqa3V42jdladiuC3zjH0Sf5VI1T1m+6jeIs0oNtG6Sdl13qxUNjOef2J8mk4wJfhmkVEjSMDtqgA9wfnkU/ORN2pLXQTOAScaeS8Q3UfK975WDp0nSVu3T4JJZo4O4u9Vf8AEkHg+KK17u0hCWYuXupZPSwncs2wYKA4xj7ooripJ5u3T9hdezCajdSu4vQ/I//Z"
    )
  );
  const [image3] = React.useState(
    getImage(
      "img_3_6bcea3d827.jpg",
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUAA0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwYI/8QAIBAAAgMAAQQDAAAAAAAAAAAAAQIAAwQRBRMy0VFSYf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxEhMaH/2gAMAwEAAhEDEQA/AObUyOVHCmU2Z2B4Im0yasa0HudP0lh9XT3Fmy2l7SUxXAfrp7iXXHOydG+zeV6hILn48jImxvmEIfRuI//Z"
    )
  );

  return (
    <>
      <Link href="/test">
        <a>Link</a>
      </Link>
      <div className="wrapper">
        <div>
          <h1>react-strapi-img</h1>
          <p>Scroll down to see some examples.</p>
        </div>
        <div style={{ marginTop: "25vh" }}>
          <p>{`This and the following 2 images have "proportionalHeight={100}", so their height is equal to their width.`}</p>
          {image2 && <Image {...image2} prefix={process.env.productionPath} />}
        </div>
        <div style={{ marginTop: "150vh" }}>
          {image3 && <Image {...image3} prefix={process.env.productionPath} />}
        </div>
        <div>
          {image1 && (
            <Image
              {...image1}
              // style={`border: 2px solid red;`}
              // styleImg={`border: 2px solid blue;`}
              // stylePlaceholder={`transition: 10s;`}
              prefix={process.env.productionPath}
            />
          )}
        </div>
        <div style={{ marginTop: "50vh" }}>
          <p>
            This image has just a plain <b>url</b>, so it does neither show a
            placeholder nor use <b>webp</b> oder <b>srcset</b>. It is provided{" "}
            <b>width</b> and <b>height</b>, so it preserves its original
            proportions.
          </p>
          {image3 && (
            <Image
              url={"img_3_6bcea3d827.jpg"}
              width={3712}
              height={5568}
              prefix={process.env.productionPath}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Startpage;
