import pro from './assets/pro-black.png'
import zip from './assets/zip-folder.png'
import html from './assets/html-file.png'
// import pdf from './assets/pdf-file.png'
// import blog from './assets/blog-template.jpg'
// import agency from './assets/agency-template.jpg'
// import port from './assets/portfolio-template.jpg'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Container from './Container'

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(reader.result)
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="card-body">
          
        
          <div className="tab-content">
              <div role="tabpanel" id="content-selector-tabpane-html" aria-labelledby="content-selector-tab-html" className="fade tab-pane active show">
                  <div className="container-dropzone tr-landing-upload-file-zone">

      <div className='uploadbox' tabIndex="0">
                     <input accept="application/zip, application/x-zip-compressed, multipart/x-zip, .html, .pdf" multiple="" type="file" style={{ display: "none" }} autoComplete="off" tabIndex="-1" />
                     <div className="flex"><img className="icon faded p-2" src={zip} alt="Zip" />
                     <div className="line ms-2 me-2" style={{ height: "40px", borderLeft: "1px solid rgb(203, 203, 203)" }}></div>
                         <img  className="icon2 faded" src={html} alt="html file" />
                     </div>
                     <div style={{ marginTop: "20px" }} className="faded">
                         <button type="button" className="btn btn-outline-dark btn-sm" style={{marginTop: "85px"}}>Upload File</button>
                     </div>
                     <div style={{ marginTop: "35px" }}> <u style={{ color: "rgb(130, 130, 130)" }}></u>
                     </div>
                 </div>
                 {/* {Container} */}
    </div>
    </div>
                            </div>
                            </div>
                            </div>
  )
}


export default FileUpload















