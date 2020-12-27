import React from "react";
import { NextPage } from "next";
import Img from "react-cool-img";
interface Props {}

const Testpage: NextPage<Props> = (props) => {
  return (
    <div className="wrapper">
      <Img src="testimg2_8abb655648.jpg" alt="REACT COOL IMG" />
    </div>
  );
};

export default Testpage;
