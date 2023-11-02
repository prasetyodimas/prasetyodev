import React, { Fragment } from "react"
import BlockElement from "./blockElement"
import HtmlIcon from "../assets/icons/skils/html.svg"
import CssIcon from "../assets/icons/skils/css.svg"
import JsIcon from "../assets/icons/skils/javascript.svg"
import TsIcon from "../assets/icons/skils/typescript.svg"
import SassIcon from "../assets/icons/skils/sass.svg"
import AngularIcon from "../assets/icons/skils/angular.svg"
import JqueryIcon from "../assets/icons/skils/jquery.svg"
import LaravelIcon from "../assets/icons/skils/laravel.svg"
import ReactIcon from "../assets/icons/skils/react.svg"
import NotionIcon from "../assets/icons/skils/notion.svg"
import BootstrapIcon from "../assets/icons/skils/bootstrap.svg"
import GithubIcon from "../assets/icons/skils/github.svg"
import GitlabIcon from "../assets/icons/skils/gitlab.svg"
import VuetifyIcon from "../assets/icons/skils/vuetify.svg"
import VueIcon from "../assets/icons/skils/vue.svg"
import StylusIcon from "../assets/icons/skils/stylus.svg"
import PhpIcon from "../assets/icons/skils/php.svg"

const Skills = () => {
  return (
    <Fragment>
      <h4>Skill</h4>
      <BlockElement className="row mt-5 mb-5 p-5" component="div">
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={HtmlIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={CssIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={JsIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={TsIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={SassIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={AngularIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={JqueryIcon}
              alt="icon"
              className="img-fluid pl-5 pr-5"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={LaravelIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={ReactIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={NotionIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={BootstrapIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={GithubIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={GitlabIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={VuetifyIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={VueIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={StylusIcon}
              alt="icon"
              className="img-fluid"
            />
          </BlockElement>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
          <BlockElement className="d-flex justify-content-center" component="span">
            <img
              src={PhpIcon}
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
