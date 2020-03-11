import React, { Component } from 'react'
import risky from '../../content/images/profile.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
       
            <div>
              <p>
                I’m Risky Muhamad. I document everything I learn and help thousands of people start
                coding careers.{' '}
                <strong>
                  My site has no ads, sponsors, or bullshit. If you enjoy my content, please
                  consider supporting what I do.
                </strong>
              </p>
     <div className="flex-avatar">
              <img className="avatar" src={risky} alt="Risky Muhamad" />
            </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
