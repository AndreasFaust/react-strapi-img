import React from "react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Testpage: NextPage<Props> = (props) => {
  return (
    <div>
      <Link href="/">
        <a>Link</a>
      </Link>
    </div>
  );
};

export default Testpage;
