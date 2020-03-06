import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import facebook from '../../content/thumbnails/facebook.png'
import instagram from '../../content/thumbnails/instagram.png'

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
        </div>
      </footer>
    )
  }
}
