import React, { useEffect, useState } from "react";

const Driver = ({ name, id }) => {
  const [offset, setOffset] = useState(0);

  const updateOffset = () => {
    setOffset((offset) => offset + Math.floor(Math.random() * 500));
    console.log(offset);
  };

  useEffect(() => {
    setInterval(updateOffset, 1000);
  }, []);

  console.log(offset);

  return (
    <>
      <text id="driverDetails">
        <textPath href={id} startOffset={offset}>
          {name}
        </textPath>
      </text>
    </>
  );
};

export default Driver;
