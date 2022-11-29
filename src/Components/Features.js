import React from 'react'
import tick from './assets/tick.png'
import pointer from './assets/hand-pointing-upward.png'
import bars from './assets/signal-bars.png'
import star from './assets/asterisk.png'
import padlock from './assets/padlock.png'

export default function Features() {
    return (
        <div class="Features_features__r3-tv">
            <div class="text-start flex-grow-1">
                <div class="Features_title__QEE4M">
                    <span style={{color: "rgb(69, 69, 69)", fontWeight: "bold"}}>Sharing work</span>
                    <span style={{color: "gray"}}> was<br/> <i>too complicated, </i>
                    </span><br/><span class="color-purple bold">so we fixed it</span>
                </div><div class="mt-5">
                    <span class=" font-22 color-purple" style={{fontFamily: "Indie Flower,cursive", fontSize: "22px"}}>And more...</span>
                    <div class="font-18 font-weight-light mt-2">
                        <img src={tick} class="me-3 op-6" width="20" height="20" />Document collections</div>
                    <div class="font-18 font-weight-light mt-2">
                        <img src={tick} class=  "me-3 op-6" width="20" height="20" />Fast, global hosting (CDN)</div>
                    <div class="font-18 font-weight-light mt-2">
                        <img src={tick} class="me-3 op-6" width="20" height="20" />Security covered (SSLs included)</div>
                </div>
            </div>
            <div class="Features_grid__Hk0KX">
                <div class="Features_gridItem__Gn6AA">
                    <img class="Features_icon__x+vWZ" src={pointer} width="24" height="24" />
                        <div class="Features_gridItemTitle__lRHlw">Drag &amp; drop files</div>
                        <div class="Features_gridItemDesc__BtDQJ">Easily drag &amp; drop your files to share your work.</div>
                </div><div class="Features_gridItem__Gn6AA">
                    <img class="Features_icon__x+vWZ" src={bars} width="24" height="24" />
                        <div class="Features_gridItemTitle__lRHlw">Track your impact</div>
                        <div class="Features_gridItemDesc__BtDQJ">Through automatic visitor analytics.</div>
                </div>
                <div class="Features_gridItem__Gn6AA">
                    <img class="Features_icon__x+vWZ" src={star} width="24" height="24" />
                        <div class="Features_gridItemTitle__lRHlw">Stay on brand</div>
                        <div class="Features_gridItemDesc__BtDQJ">Connect your own custom domain (web address).</div>
                </div>
                <div class="Features_gridItem__Gn6AA">
                    <img class="Features_icon__x+vWZ" src={padlock} width="24" height="24" />
                        <div class="Features_gridItemTitle__lRHlw">Keep it private</div><div class="Features_gridItemDesc__BtDQJ">Password protect your work to restrict access.</div>
                </div>
            </div>
        </div>
    )
}
