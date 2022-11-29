import React, { useState } from 'react'
import check from './assets/check.png'
import info from './assets/info-grey.svg'

export default function Pricing() {

const [Price, setPrice] = useState(18)
const [ProVer, setProVer] = useState(38)
const [Solo, setSolo] = useState('')
const [Pro, setPro] = useState('')

function pricingYearly(){
    setPrice(13)
}

function pricingMonthly(){
    setPrice(18)
}

function proYearly(){
    setProVer(31)
}

function proMonthly(){
    setProVer(38)
}

function pricesolo(){
    setSolo('Billed $156 / year (save 25%)')
}

function pricesolomonthly(){
    setSolo('')
}

function priceProYearly(){
    setPro('Billed $ 372 / year (save 25%)')
}

function priceProMonthly(){
    setPro('')
}


    return (
        <div className="mt-3 mb-3 position-relative container mb-5 mt-v20">
            <div role="group" className="btn-group">
                <input className="btn-check grpbutton" name="radio" type="radio" autocomplete="off" id="monthly" value="monthly" /><label tabIndex="0" htmlFor="monthly" className="cursor-pointer btn btn-outline-dark btn-sm" 
                onClick={()=>{pricingMonthly()
                 proMonthly()
                 pricesolomonthly()
                 priceProMonthly()}} >Monthly</label>
                <input className="btn-check grpbutton" name="radio" type="radio" autocomplete="off" id="yearly" value="yearly" checked="" /><label tabIndex="0" htmlFor="yearly" className="cursor-pointer btn btn-outline-dark btn-sm"
                 onClick={()=>{pricingYearly()
                proYearly() 
                pricesolo()
                priceProYearly()}}>Yearly</label>
            </div>
            <p className="mt-4 mb-5 text-sm" style={{ marginLeft: "22rem" }}>Questions? <span className="link color-purple">
                <u>Chat with us</u></span>
                <div className="guarantee light-grey">🎖️ 7 day money back guarantee</div>
            </p>
            <div id="pricingYearly" className="container-cards">
                <div className="me-auto ms-auto mb-4">
                    <div className="pro-plans-container"><div className="box-shadow pro-box me-md-4">
                        <h3 className="font-18 color-purple"><b>Free Trial</b>
                        </h3>
                        <div className="indie-flower-font font-18 color-purple mt-3 mb-3 ps-2 pe-2">
                        </div>
                        <div className="price text-center">$ 0 </div>
                        <div className="plan-feature">
                            <img alt="check" src={check} width="20px" height="20px" /> <span>1 live site live htmlFor <b>7 days</b></span>
                        </div><div className="plan-feature">
                            <img alt="check" src={check} width="20px" height="20px" /> <span>Upload up to <b>3mb</b>
                                files</span></div><div className="plan-feature">
                            <img alt="check" src={check} width="20px" height="20px" /> Tiiny Host branding</div>
                        <button type="button" className="action-btn mt-3 undefined btn btn-primary">Upload</button>
                    </div>
                        <div className="box-shadow pro-box me-md-4 mt-4 mt-md-0 tr-pro-card tr-pro-plan flip-in-ver-left">
                            <h3 className="font-18 color-purple">
                                <b>Solo</b>
                            </h3>
                            <div className=" font-18 color-purple mt-3 mb-3 ps-2 pe-2" style={{ fontFamily: "Indie Flower,cursive", fontSize: "18px" }}>Great for individuals and small sites</div>
                            <div className="price text-center">$ {Price}<span className="price-period">/ month</span></div>
                            <p className='priceSolo'>{Solo}</p>
                            <div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Up to <b>5 live</b> sites</span>
                                <img className="ms-2 mt-1" src={info} height="15" />
                            </div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Upload up to <b>75mb</b> files</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Link your <b>custom domains</b>
                                </span><img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>
                                <b>Analytics</b></span><img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>
                                <b>Password protection</b></span>
                                <img className="ms-2 mt-1" src={info} height="15" />
                            </div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Fast global hosting (CDN)</span>
                                <img className="ms-2 mt-1" src={info} height="15" />
                            </div>
                            <div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>No Tiiny Host branding</span>
                                <img className="ms-2 mt-1" src={info} height="15" />
                            </div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Amazing support</span>
                                <img className="ms-2 mt-1" src={info} height="15" />
                            </div><button type="button" className="action-btn mt-3 undefined btn btn-primary">Go Solo</button>
                        </div><div className="box-shadow pro-box mb-auto mt-4 mt-md-0 tr-pro-card tr-pro-plus-plan flip-in-ver-left">
                            <h3 className="font-18 color-purple"><b>Pro</b></h3><div className="indie-flower-font font-18 color-purple mt-3 mb-3 ps-2 pe-2" style={{ fontFamily: "Indie Flower,cursive", fontSize: "18px" }}>For freelancers, agencies &amp; organizations</div>
                            <div className="price text-center   ">$ {ProVer} <span className="price-period">/ month</span>
                            <p className='priceSolo'>{Pro}</p>
                            </div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Up to <b>12 live</b> sites</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>Upload <b>over 75mb</b> files</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>Link your <b>custom domains</b>
                            </span><img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span><b>Analytics</b></span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span><b>Password protection</b></span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>Fast global hosting (CDN)</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>No Tiiny Host branding</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div><div className="plan-feature">
                                <img alt="check" src={check} width="20px" height="20px" /> <span>Amazing support</span>
                                <img className="ms-2 mt-1" src={info} height="15" /></div>
                            <div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>
                                <b>Add additional users</b></span><img className="ms-2 mt-1" src={info} height="15" />
                            </div><div className="plan-feature"><img alt="check" src={check} width="20px" height="20px" /> <span>
                                <b>Edit files online</b></span><img className="ms-2 mt-1" src={info} height="15" />
                            </div><button type="button" className="action-btn mt-3 undefined btn btn-primary">Go Pro</button>
                        </div>
                    </div>
                </div>
            </div><div className="ms-auto me-auto" style={{ maxWidth: "250px" }}><a className="cursor-pointer link color-purple">
                <u>View student plans</u></a></div>
        </div>

    )
}
