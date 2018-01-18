import React from 'react'
import { Link } from 'react-router'

export default function Cover () {
  return <div className="cover-wrapper">
    <div className="cover-map">
    </div>
    <div className="cover-content">
      <div className="cover-icon">
        <img src="https://cloud.githubusercontent.com/assets/3898898/23833571/e5c7ae68-0782-11e7-8590-cecf4f3c969f.png"
             alt=""/>
      </div>
      <h3>b-rc</h3>
      <div className="cover-link">
        <a className="github" href="https://github.com/Mi-FanFan/b-rc" target="_blank">GitHub</a>
        <Link className="start" to="/articles/start">Get Started</Link>
      </div>
      <div className="slogan">
        Make b-rc Great Again
      </div>
    </div>
  </div>
}
