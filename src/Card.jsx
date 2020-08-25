import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Card = (props) => {
  return (
    <>
      <div id="team" className="col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <img
              src={props.imgsrc}
              alt=""
              className="img-fluid rounded-circle w-50 mb-3 mx-auto d-block "
            />
            <h3 className="text-center">{props.title}</h3>
            <h5 className="text-center">
              <strong>IGN :</strong>
              {props.IGN}
            </h5>
            <h6 className="text-center">
              <strong>ROLE: </strong>
              {props.Role}
            </h6>
            <p className="text-center">
              <strong>ID: </strong>
              {props.idd}
            </p>
            <div className="d-flex flex-row justify-content-center">
              <div className="p-4">
                <a href={props.fb} className="facebook">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
              <div className="p-4">
                <a href={props.fb} className="twitter">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
              <div className="p-4">
                <a href={props.insta} className="instagram">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
