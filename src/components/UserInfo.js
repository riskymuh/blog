import React, { Component } from 'react'
import risky from '../../content/images/profile.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
              
              <div className="flex-avatar">
           <center>
              <img className="avatar" src={risky} alt="Risky Muhamad" />
          </center>
            <div>
              <p align=”center”>
             
               Terima kasih telah membaca di situs saya, semoga dapat memberikan manfaat.
              </p>
               <p align=”center”>
             
               ~Risky Muhamad~
              </p>
     
            </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
