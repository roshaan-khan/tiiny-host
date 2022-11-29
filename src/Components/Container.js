import React, { useState } from 'react'
import arrow from './assets/arrow.svg'
import sales from './assets/salesforce.png'
import square from './assets/square.png'
import veed from './assets/veed.svg'
import cog from './assets/cognizant.png'
import nestle from './assets/nestle.png'
import FileUpload from '../Components/FileUpload'
import ZipUpload from '../Components/ZipUpload'

    export default function Container() {

    const [Container, setContainer] = useState(<FileUpload />)

    async function GoogleApi(){
        const url = 'http://localhost:8000/api/deploy/authGoogleUrl';
        const response = await  fetch(url,{
            method: 'GET',
        })  
        .catch((e) => {console.log(response)}
          )
        }
    
    


    return (
        <>
            <div className="container">
                <div className="card  mb-3" style={{ backgroundColor: "#fff", width: "500px", height: "28rem", position: "absolute", left: "29.6rem", top: "17rem", width: "40rem", border: "none", boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}>
                    <div className="input-domain input-group" style={{ width: "418px", margin: "auto", marginTop: "15px" }}>
                        <input name="subdomain" placeholder="link-name" aria-label="Subdomain" type="text" id='input' className="tr-landing-domain-input form-control" style={{ width: "7rem", marginRight: "1rem" }} />
                        <button type="button" aria-expanded="false"  className="butn btn btn-primary" onClick={()=>{GoogleApi()}}>Sign Up With Google</button>
                    </div>
                    <ul className="mb-3 justify-center nav nav-tabs menubar" role="tablist" style={{ justifyContent: "center", marginTop: "38px" }}>
                        <li className="naitem nav-item" role="presentation">
                            <button type="button" id="content-selector-tab-html" role="tab" data-rr-ui-event-key="html" aria-controls="content-selector-tabpane-html" onClick={() => setContainer(<FileUpload />)} aria-selected="true" className="nav-link html active" style={{ border: "none", color: "#a6a6a6" }}>HTML</button>
                        </li>
                        <li className="naitem nav-item" role="presentation">
                            <button type="button" id="content-selector-tab-pdf" role="tab" data-rr-ui-event-key="pdf" aria-controls="content-selector-tabpane-pdf" aria-selected="false" className="nav-link is-active" onClick={() => setContainer(<ZipUpload />)} tabIndex="-1" style={{ border: "none", color: "#a6a6a6" }}>ZIP</button>
                        </li>
                        </ul>
                        <div>

                    {Container}
                        </div>

{/* {isActive()} */}

                    <button type="submit" className="uploadbtn action-btn mt-3  tr-landing-launch-site btn btn-primary">Upload</button>

                    <div className="arrow-cta d-none d-lg-block">
                        <div style={{ fontFamily: " 'Indie Flower', cursive", fontSize: "24px", width: "124px", color: "#914ab5", position: "absolute", top: "4.4rem", left: "48.9rem" }}>Try for free</div>
                        <img className="arrow" src={arrow} height="90" style={{ marginLeft: "50px", position: "absolute", top: "7.6rem", left: "39.8rem" }} />
                    </div>
                    <div className="landing-testimonial d-none d-lg-block">
                        
                        <p style={{
                            width: "250px", position: "absolute", top: "5rem", opacity: ".7", right: '46rem', transform: "rotate(-4deg)", fontFamily: "'Indie Flower', cursive", fontSize: "16px", letterSpacing: "2px"
                        }}>"Perfect for sharing quick updates with clients. It’s just a simple, hassle-free way to host prototypes."</p>
                        <p className="text-end mt-3 testimonial-author font-small" style={{ position: "absolute", top: "11rem", opacity: ".7", right: '44rem', width: "147px", transform: "rotate(-4deg)", fontFamily: "'Indie Flower', cursive", fontSize: "16px", letterSpacing: "2px" }}>- Phil Delvecchio,</p>
                        <p className="text-end testimonial-author font-small" style={{ position: "absolute", top: "13.4rem", opacity: ".7", right: '44rem', width: "150px", transform: "rotate(-4deg)", fontFamily: "'Indie Flower', cursive", fontSize: "16px", letterSpacing: "2px" }}>Hapday Group</p>
                    </div>
                    <div className="recaptcha-terms  mx-5" style={{ fontSize: "12px", color: "#dfdfdf", position: "absolute", top: "28rem" }}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" style={{ color: "#dfdfdf" }}>Privacy Policy</a> and <a href="https://policies.google.com/terms" style={{ color: "#dfdfdf" }}>Terms of Service</a> apply.</div>
                
                </div>
                <h3 className="logos-title" style={{ fontSize: "12px", position: "absolute", top: "52rem", left: "39rem", letterSpacing: "2px", color: "#212529", opacity: ".4" }}>USED BY INDIVIDUALS, START-UPS &amp; CORPORATES</h3>
                <div className=" opacity-75 logos" style={{ margin: "41rem 21rem 0 139px", width: "50rem" }}>
                    <img className="me-3 me-md-5" src={sales} height="40" />
                    <img className="m-auto op-7 me-3 me-md-5" src={square} height="25" />
                    <img className="m-auto op-7 me-3 me-md-5" src={veed} height="20" />
                    <img className="m-auto op-6 me-3 me-md-5" src={cog} height="25" />
                    <img className="op-7" src={nestle} height="40" />

                </div>
                {/* {Container} */}
            </div>
        </>
    )
    
                    

                    }