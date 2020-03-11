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
           <img className="avatar" src={risky} style="float: left;" />Terima kasih telah membaca artikel saya Semoga dapat bermanfaat<br />

//              <img className="avatar" src={risky} alt="Risky Muhamad" />
          </center>
//            <div>
//              <p>
//               Terima kasih telah membaca artikel saya Semoga dapat bermanfaat 
//        
//              </p>
//     
//            </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
