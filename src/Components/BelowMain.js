import React from 'react'
import left from './assets/left.png'
import brush from './assets/paint-brush.png'
import coding from './assets/coding.png'
import home from './assets/home.png'
import knife from './assets/knife-and-fork.png'
import board from './assets/whiteboard.png'
import coins from './assets/coins.png'
import graph from './assets/graphic-design.png'
import hat from './assets/graduate-cap.png'
import next from './assets/next.png'

export default function BelowMain() {
  return (
    <div className="UseCasesSection_section__WpM76">
      <h2 className="text-md-start bold color-purple belowtitle mt-5">Yes, it's for you</h2>
      <div className="flex mt-5"> 
        <button className="UseCasesSection_scrollBtn__0dP24">
          <img src={left} style={{verticalAlign: "text-top", opacity: "0.7"}} width="20" height="20" />
        </button><div className="UseCasesSection_tabContainer__fBqeR hide-scroll">
          <button className="UseCasesSection_tab__BE-1U UseCasesSection_activeTab__gxfTX" style={{background:"#ae5dd7"}}>
          <img className="UseCasesSection_whiteFilter__TtqXm me-2 mb-1 active" src={brush} style={{verticalAlign:" bottom"}} height="15" />
          Designers
        </button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={coding} style={{verticalAlign: "bottom"}} height="15" />Developers</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={home} style={{verticalAlign: "bottom"}} height="15" />Real Estate</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={knife} style={{verticalAlign: "bottom"}} height="15" />Hospitality</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={board} style={{verticalAlign: "bottom"}} height="15" />E-Learning</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={coins} style={{verticalAlign:" bottom"}} height="15" />Crypto</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={graph} style={{verticalAlign:" bottom"}} height="15" />Digital Artists</button>
          <button className="UseCasesSection_tab__BE-1U ">
            <img className=" me-2 mb-1" src={hat} style={{verticalAlign:" bottom"}} height="15" />Students</button>
        </div><button className="UseCasesSection_scrollBtn__0d24">
          <img src={next} style={{verticalAlign: "text-top", opacity:"0.7"}} width="20" height="20" /></button>
      </div><div className="UseCasesSection_wrapper__4nDeB">
        <div className="UseCasesSection_icon__RPheb">
          <img className="UseCasesSection_whiteFilter__TtqXm" src={brush} height="30" />
        </div>
        <div className="ms-md-4">
          <div className="UseCasesSection_descr__U9vF+">Finally see how your clients really feel<br/>about your design.</div>
          <div className="mt-3"><ul className="UseCasesSection_bullets__uhAvd"><li>Analytics show which client drafts have the most impact</li>
            <li>Launch your portfolio in seconds</li>
            <li>Password protect your demos</li>
          </ul>
          </div>
        </div>
        <div className="UseCasesSection_quote__aVrM2 ms-md-5">
          <div className="UseCasesSection_quoteText__eoVN8">
            <div style={{width: "15rem"}}>"Perfect for sharing quick updates with clients. It’s just a simple, hassle-free way to host prototypes."</div>
            <div className="font-16">- Phil, Hapday group</div>
          </div>
        </div>
      </div>
    </div>
  )
}
