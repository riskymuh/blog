import React, { Component } from 'react'
import tania from '../../content/images/profile.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Tania Rascia" />
            </div>
            <div>
              <p>
                I’m Risky Muhamad. I document everything I learn and help thousands of people start
                coding careers.{' '}
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
