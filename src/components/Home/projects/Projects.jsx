import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
  <div className="projectcontaienr">
    <div className="proheading">
      <p>Our Project</p>
    </div>
    <div className="wrapper">
    <div className="card">
      <div className="poster"><img src="https://i.pinimg.com/originals/14/e1/46/14e1468a581884b0dcffc9536f39f7d6.gif" alt="Location Unknown"/></div>
      <div className="details">
        <h1>Chat App</h1>
        
        <p className="desc">
        Chat App is a free cross-platform messaging service. It lets users of iPhone and Android smartphones and Mac and Windows PC call and exchange text.
        </p>
        
      </div>
    </div>
    <div className="card">
      <div className="poster"><img src="https://cdn.dribbble.com/users/21820/screenshots/6004447/000.gif" alt="Location Unknown"/></div>
      <div className="details">
        <h1>MixKit</h1>
        
        <p className="desc">
        MixKit is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them.
        </p>
        
      </div>
    </div>
    <div className="card">
      <div className="poster"><img src="https://cdn.dribbble.com/users/1306249/screenshots/9790281/media/d23058b1d72a8600bf0763789860f2ac.gif" alt="Location Unknown"/></div>
      <div className="details">
        <h1>Line</h1>
        
        <p className="desc">
        Line is a secure messaging and audio calling cloud-based app that allows you to send messages, photos, videos and files of any type to your contacts for free.
        </p>
        
      </div>
    </div>
  </div>
  </div>
  )
}

export default Projects