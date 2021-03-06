import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center "> Our Players </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    fb={val.fbk}
                    IGN={val.IGN}
                    insta={val.insta}
                    Role={val.Role}
                    idd={val.idd}
                    key={ind}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
