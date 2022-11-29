
import  {useState} from 'react'
import Container from './Container'
import react from 'react'



function MyDropzone(){
  return (
<>
                                    {/* <div className='uploadbox' tabIndex="0">
                                        <input accept="application/zip, application/x-zip-compressed, multipart/x-zip, .html, .pdf" multiple="" type="file" style={{ display: "none" }} autoComplete="off" tabIndex="-1" />
                                        <div className="flex"><img className="icon faded p-2" src={zip} alt="Zip" />
                                        <div className="line ms-2 me-2" style={{ height: "40px", borderLeft: "1px solid rgb(203, 203, 203)" }}></div>
                                            <img  className="icon2 faded" src={html} alt="html file" />
                                        </div>
                                        <div style={{ marginTop: "20px" }} className="faded">
                                            <button type="button" className="btn btn-outline-dark btn-sm" style={{marginTop: "85px"}}>Upload file</button>
                                            </div>
                                        <div style={{ marginTop: "35px" }}>Or <u style={{ color: "rgb(130, 130, 130)" }}>use an example</u>
                                        </div>
                                    </div> */}
                                    {Container}
                                
                            </>                                  
                            )
}



export default MyDropzone