import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Container from "./Components/Container";
import MyDropzone from "./Components/DragnDrop";
import BelowMain from "./Components/BelowMain";
import FrameArea from "./Components/FrameArea";
import ScaleImage from "./Components/ScaleImage";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Faq from './Components/Faq'
import FileUpload from "./Components/FileUpload";
function App() {
  return (
   <>
  <Nav/>
  <Header/>
  <Main/>
  <Container/>
<MyDropzone />
<BelowMain />
<FrameArea />
<ScaleImage />
<Features />
<Pricing />
<Faq />
{/* <FileUpload /> */}
   </>
  );
}

export default App;
