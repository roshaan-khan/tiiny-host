import React from 'react'
import one from './assets/one.svg'
import two from './assets/two.svg'
import three from './assets/three.svg'
import demo from './assets/demo.gif'

export default function FrameArea() {
  return (
    <div className="HowItWorks_container__olV9J"><div className="HowItWorks_content__OnWDZ">
        <div><h2 className="HowItWorks_header__vKcwP">It's really simple</h2>
        <span className="HowItWorks_subtitle__3qqE6"> - launch in seconds</span>
        </div>
        <div className="HowItWorks_steps__SFTEU">
            <div className="opacity-8 flex">
                <img src={one} className="" height="40" style={{marginRight: "1rem"}} />
                    <div style={{fontFamily :"sans-serif", fontSize: "22px", lineHeight:"2.5", marginLeft:"63px",marginTop: "-50px"}}>Drag &amp; drop your individual file or zip file containing your content.</div>
                    </div>
                    <div className="opacity-8 flex" style={{fontFamily :"sans-serif", fontSize: "22px",lineHeight:"2.5"}}>
                        <img src={two}  height="40" style={{marginRight: "1rem", }} /> Enter a link-name or just click upload</div>
                        <div className="opacity-8 flex" style={{fontFamily :"sans-serif", fontSize: "22px",lineHeight:"2.5"}}>
                            <img src={three} className="" height="40" style={{marginRight: "1rem"}} /> Copy &amp; share your link - that's it!</div>
                            </div>
                            <a href="#home">
                                <button className="button bg-purple-light white font-18" style={{width: "140px"}}>Try it out →</button>
    </a></div><img className="d-none d-md-block" src={demo} height="400"/></div>
  )
}
