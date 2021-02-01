import React from "react";
import { NextPage } from "next";
import Image from "../src";
import getImage from "../utils/getImage";

const Startpage: NextPage = () => {
  const [image1] = React.useState(
    getImage({
      url: "testimg_1d61597ba3.jpg",
      base64:
        "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUHAgb/xAAlEAACAQMCBgMBAAAAAAAAAAABAgMABBEFEgYHEyExQSIycVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABgRAAMBAQAAAAAAAAAAAAAAAAABEQID/9oADAMBAAIRAxEAPwCT8sZ4o9Q055XZFF1uJz5AFdhzB4mt7rW4hAz7OiBJj3lk7iopZaleWqp0LiRCjb0w31b+/tYuNRurmXfPNI7gEZLevOKmfJvVo2esUg24guVXU5Pl3IGf3GKKQyvvfc+ST7JoplmIN6rp/9k=",
      width: 3981,
      height: 2654,
    })
  );
  const [image2] = React.useState(
    getImage({
      url: "testimg2_8abb655648.jpg",
      base64:
        "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUAA0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQH/8QAJhAAAgEDAgQHAAAAAAAAAAAAAQIDABEhBDESE1FhFCIjMqHh8f/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIQJB/9oADAMBAAIRAxEAPwDiLxqr8uQehuCNxfp27VdrtPFJICSBi+De9OiNO6GThVlQsFO0gvby/NS0DLHGWZSrLcZtbqKxVqlWY1kfwwbiN4VPLz7c/dNqNRIpADW/BRRTSoeH/9k=",
      width: 4000,
      height: 6000,
    })
  );

  return (
    <div className="wrapper">
      <p>Scroll down to see some examples.</p>
      <div
        style={{
          marginTop: "25vh",
          gridColumn: "span 2",
        }}
      >
        {image1 && (
          <Image
            {...image1}
            style={`
              border: 10px solid blue;
              border-radius: 3rem;
            `}
            sizes={"50vw"}
            prefix={process.env.productionPath}
          />
        )}
      </div>
      <div style={{ marginTop: "25vh" }}>
        {image2 && <Image {...image2} prefix={process.env.productionPath} />}
      </div>
      <div style={{ marginTop: "25vh" }}>
        <p>{`This image has "proportionalHeight={100}", so its height is equal to its width.`}</p>
        {image1 && (
          <Image
            proportionalHeight={50}
            {...image1}
            // style={`border: 2px solid red;`}
            // styleImg={`border: 2px solid blue;`}
            // stylePlaceholder={`transition: 10s;`}
          />
        )}
      </div>
      <div style={{ marginTop: "25vh" }}>
        <p>
          This image has just a plain <b>url</b>, so it does neither show a
          placeholder nor use <b>webp</b> oder <b>srcset</b>.
        </p>
        {image2 && (
          <Image
            url={"testimg2_8abb655648.jpg"}
            width={4000}
            height={6000}
            prefix={process.env.productionPath}
          />
        )}
      </div>
    </div>
  );
};

export default Startpage;
