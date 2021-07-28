import React from "react";
import { Visibility } from "@material-ui/icons";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.kincir.com/1/production/media/2019/juli/alasan-mengapa-nezuko-layak-jadi-best-girl-spring-2019/nezuko-kamado-cute-demon-kimetsu-no-yaiba.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nezuko</span>
            <span className="widgetSmUserTitle"> Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.kincir.com/1/production/media/2019/juli/alasan-mengapa-nezuko-layak-jadi-best-girl-spring-2019/nezuko-kamado-cute-demon-kimetsu-no-yaiba.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nezuko</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.kincir.com/1/production/media/2019/juli/alasan-mengapa-nezuko-layak-jadi-best-girl-spring-2019/nezuko-kamado-cute-demon-kimetsu-no-yaiba.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nezuko</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.kincir.com/1/production/media/2019/juli/alasan-mengapa-nezuko-layak-jadi-best-girl-spring-2019/nezuko-kamado-cute-demon-kimetsu-no-yaiba.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nezuko</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.kincir.com/1/production/media/2019/juli/alasan-mengapa-nezuko-layak-jadi-best-girl-spring-2019/nezuko-kamado-cute-demon-kimetsu-no-yaiba.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nezuko</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
