import React from 'react';
import './LandingPage.css';

export default function LandingPage({setRoute}){
  return(
   <div className="is-preload">
        <div id="page-wrapper">
        <div id="wrapper">
  
          <section className="panel banner right">
            <div className="content color0 span-3-75">
              <h1 className="major">Visual<br />
              Music</h1>
              <p>The Webapp that converts your favorite music pieces into visual expressions. Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a music piece uploaded. </p>
              <ul className="actions">
                <li><div onClick={()=>setRoute('playerPage')} className="button primary color1 circle icon fa-angle-right">Next</div></li>
              </ul>
            </div>
            <div className="image span-1-75" data-position="25% 25%">
              <img src="images/pic01-vm.jpg" alt="" />
            </div>
          </section>
  
          <section className="panel">
            <div className="image span-1-75" data-position="25% 25%">
            <img src="images/pic02-vm.jpg" alt="" />
            </div>
          </section>
  
          <section className="panel color1">
            <div className="intro joined">
              <h2 className="major">Best Experience</h2>
              <p>Various themes to transcribe the emotional effects of your favorite music piece.<br /><br />You like it? Print it out! </p>
            </div>
            <div className="inner">
              <ul className="grid-icons three connected">
                  <li><span className="icon fa-music"><span className="label">Dolor</span></span></li>
                <li><span className="icon fa-camera-retro"><span className="label">Ipsum</span></span></li>
                <li><span className="icon fa-print "><span className="label">Lorem</span></span></li>
              </ul>
            </div>
          </section>
  
          <section className="panel">
            <div className="image span-1-75" data-position="25% 25%">
            <img src="images/pic01-vm.jpg" alt="" />
            </div>
          </section>
  
          <section className="panel color4-alt">
            <div className="intro color4">
              <h2 className="major">Contact</h2>
              <p>Would you like to write us?</p>
            </div>
            <div className="inner columns divided">
              <div className="span-3-25">
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" className="button primary" /></li>
                  </ul>
                </form>
              </div>
              <div className="span-1-5">
                <ul className="contact-icons color1">
                  <li className="icon fa-github"><a href="https://github.com/zero-to-mastery/visual-music">github.com/visual-music</a></li>
                  <li className="icon fa-linkedin"><a href="">linkedin.com/visual-music</a></li>
                  <li className="icon fa-facebook"><a href="">facebook.com/visual-music</a></li>
                  <li className="icon fa-medium"><a href="">medium.com/visual-music</a></li>
                </ul>
              </div>
            </div>
          </section>
  
        </div>
      </div>
  
      </div>)}