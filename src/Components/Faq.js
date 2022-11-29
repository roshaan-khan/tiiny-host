import React from 'react'
import auth1 from './assets/quote-auth-1.jpg'
import auth2 from './assets/quote-auth-2.jpg'
import auth3 from './assets/quote-auth-3.jpg'
import auth4 from './assets/quote-auth-4.jpg'
// import auth5 from './assets/quote-auth-5.jpg'
import auth6 from './assets/quote-auth-6.jpg'
import auth7 from './assets/quote-auth-7.jpg'
export default function FAQ() {
  return (
    <>
    <div className="FAQ_container__VxpCn">
    <div className="FAQ_quoteList__qNPq5">
        <div style={{marginTop: "40px"}}>
            <div className="mb-4 opacity-50 font-22 font-weight-lighter">5/5 <br/>⭐️⭐️⭐️⭐️⭐️</div>
            <div className="FAQ_quoteCard__Msrpc">
                <div className="opacity-8">"I found the website very intuitive to use, and the ability to create custom domains is amazing. "</div>
                <div className="FAQ_quoteAuthor__I1+mQ">
                    <img className="me-2 round-20" src={auth4} width="15" height="15"/>
                    <span>Nurbek</span>
                    </div>
                    </div>
                    <div className="FAQ_quoteCard__Msrpc">
                        <div className="opacity-8">"The platform is awesome I recently just found out it existed!"</div>
                        <div className="FAQ_quoteAuthor__I1+mQ">
                            <img className="me-2 round-20" src={auth2} width="15" height="15"/><span>Jonathan</span>
                            </div>
                            </div>
                            <div className="FAQ_quoteCard__Msrpc">
                                <div className="opacity-8">"Phil was very knowledgeable and explained everything clearly."</div>
                                <div className="FAQ_quoteAuthor__I1+mQ">
                                    <img className="me-2 round-20" src={auth3} width="15" height="15"/>
                                    <span>Cliff</span>
                                    </div>
                                    </div>
                                    </div>
                                    <div>
                                        <div className="FAQ_quoteCard__Msrpc">
                                            <div className="opacity-8">"I love your service, its so simple to use!"</div>
                                            <div className="FAQ_quoteAuthor__I1+mQ">
                                                <img className="me-2 round-20" src={auth1} width="15" height="15"/>
                                                    <span>Vaidy</span>
                                                    </div>
                                                    </div>
                                                    <div className="FAQ_quoteCard__Msrpc">
                                                        <div className="opacity-8">"Your platform is awesome, and I enjoyed taking it out for a spin"</div>
                                                        <div className="FAQ_quoteAuthor__I1+mQ">
                                                            <img className="me-2 round-20" src={auth6} width="15" height="15"/>
                                                            <span>Sal</span>
                                                            </div>
                                                            </div>
                                                            <div className="FAQ_quoteCard__Msrpc">
                                                                <div className="opacity-8">"For prototyping &amp; sharing in the remote work setting, I don't see any better alternative."</div>
                                                                <div className="FAQ_quoteAuthor__I1+mQ">
                                                                    <img className="me-2 round-20" src={auth7} width="15" height="15"/><span>Jessica</span>
                                                                    </div>
                                                                    </div>
                                                                    </div>
    </div>
    <div className="FAQ_faqList__OgbUX">
    <h2>Frequently Asked Questions</h2>
    <div className="FAQ_accordion__pw1iw accordion accordion-flush">
    <div className="accordion-item"><h2 className="font-18 accordion-header">
    <button type="button" aria-expanded="false" className="accordion-button collapsed">Do you support WordPress or similar CMS?</button></h2>
    <div className="accordion-collapse collapse">
    <div className="text-start font-18 accordion-body">No we do not, we only host static websites.</div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="font-18 accordion-header">
    <button type="button" aria-expanded="false" className="accordion-button collapsed">What is a static website?</button>
    </h2>
    <div className="accordion-collapse collapse">
    <div className="text-start font-18 accordion-body">A static website is a website that appears the same to all visitors and does not require a backend server or database to render it. It's composed of frontend only static files such as such as HTML, JavaScript and images (jpeg, png, svg etc).</div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="font-18 accordion-header">
    <button type="button" aria-expanded="false" className="accordion-button collapsed">Do you support e-commerce sites?</button>
    </h2><div className="accordion-collapse collapse">
        <div className="text-start font-18 accordion-body">We do not in the traditional CMS way (WordPress, Joomla etc), but we do support static e-commerce sites.</div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="font-18 accordion-header">
                <button type="button" aria-expanded="false" className="accordion-button collapsed">What's the fastest way to reach you in case I need help?</button>
                </h2>
                <div className="accordion-collapse collapse">
                    <div className="text-start font-18 accordion-body">Send us a message via the chat icon in the bottom right-hand corner or an email at support@tiiny.host. We're quick to respond and always happy to help. Our goal is to make web hosting as simple as possible.</div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="font-18 accordion-header">
                            <button type="button" aria-expanded="false" className="accordion-button collapsed">How does your 7 day money back guarantee work?</button>
                            </h2>
                            <div className="accordion-collapse collapse">
                                <div className="text-start font-18 accordion-body">We have many happy customers. However, if for some reason after you upgrade to one of our paid plans you decide that it's not for you, then just reach out to our friendly support within 7 days and we'll be happy to give you a full refund.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="font-18 accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button collapsed">Can I cancel at anytime?</button>
                                        </h2>
                                        <div className="accordion-collapse collapse">
                                            <div className="text-start font-18 accordion-body">Of course! If you no longer need us, just cancel your subscription via your control panel. We process subscriptions through Stripe - which also manages thousands of other subscription services.</div>
                                            </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="font-18 accordion-header">
                                                    <button type="button" aria-expanded="false" className="accordion-button collapsed">What happens after I cancel?</button>
                                                    </h2>
                                                    <div className="accordion-collapse collapse">
                                                        <div className="text-start font-18 accordion-body">Your sites will remain live until the end of your billing period. After this time, we'll completely remove them along with your account from our servers.</div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <div className="mt-5 pt-5 ms-auto me-auto">
                                                            <h3 className="bold">Ready to share your work?</h3>
                                                            <div className="m-auto">
                                                                <a href="#home">
                                                                    <button className="button bg-purple-light white font-18">Upload for free</button>
                                                                    </a>
                                                                    </div>
                                                                    </div>
                                                                    </div>
    </div>
    </>
  )
}
