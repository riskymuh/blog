import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import facebook from '../../content/thumbnails/facebook.png'
import instagram from '../../content/thumbnails/instagram.png'
import spotify from '../../content/thumbnails/spotify.png'
import google from '../../content/thumbnails/google-plus.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
           Theme by Tania 
        </div>
        <div>
        <a href="https://www.instagram.com/riskymuhamad02" title="Folow Instagram saya">
            <img
              src={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="instagram"
            />
          </a>  
        
        <a href="https://www.facebook.com/riskymuhamadsgb" title="mari berteman di facebook">
            <img
              src={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="facebook"
            />
          </a>
                <a href="https://open.spotify.com/user/doklhbb6k0dsgbkbcxj24m7p3?si=V60fR4MdT3-hyxrIc2BRJw" title="Ikuti Spotify">
            <img
              src={spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="spotify"
            />
          </a>  
                <a href="mailto:riskymuhamad11@gmail.com" title="Gmail">
            <img
              src={google}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="google"
            />
          </a>    
        </div>
      </footer>
    )
  }
}
