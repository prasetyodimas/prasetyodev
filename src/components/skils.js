import React, { Fragment } from "react"
import BlockElement from "./blockElement"
import HtmlIcon from "../assets/icons/skils/html.svg"
import CssIcon from "../assets/icons/skils/css.svg"
import JsIcon from "../assets/icons/skils/javascript.svg"
import TsIcon from "../assets/icons/skils/typescript.svg"
import SassIcon from "../assets/icons/skils/sass.svg"
import AngularIcon from "../assets/icons/skils/angular.svg"

const Skills = () => {
  return (
    <Fragment>
      <h4>Skill</h4>
      <BlockElement className="row mt-5 mb-5 p-5" component="div">
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={HtmlIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={CssIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={JsIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={TsIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={SassIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={AngularIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
      </BlockElement>
    </Fragment>
  );

}

export default Skills
