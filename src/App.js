import "./App.css"
import img12 from "./Asset/img12.webp"
import img2 from "./Asset/img2.webp"
import img13 from "./Asset/img13.webp"
import img5 from "./Asset/img5.webp"
import img6 from "./Asset/img6.webp"
import img7 from "./Asset/img7.webp"
import img8 from "./Asset/img8.webp"
import img9 from "./Asset/img9.jpeg"
import img10 from "./Asset/img10.webp"
import img11 from "./Asset/img11.webp"
import { Card } from "./component/Card"

function App() {
  return (
   <div>
    <h1 class="first">Image Gallery</h1>

    <div class="total">

    <div class="second">
      <Card imgsrc={img12} name={"Image1"}></Card>
      <Card imgsrc={img2} name={"Image2"}></Card>
      <Card imgsrc={img13} name={"Image3"}></Card>
      <Card imgsrc={img5} name={"Image4"}></Card>
      <Card imgsrc={img6} name={"Image5"}></Card>
    </div>

    <div class="third">
      <Card imgsrc={img7} name={"Image6"}></Card>
      <Card imgsrc={img8} name={"Image7"}></Card>
      <Card imgsrc={img9} name={"Image8"}></Card>
      <Card imgsrc={img11} name={"Image9"}></Card>
      <Card imgsrc={img10} name={"Image10"}></Card> 
    </div>
      
    </div>

   </div>
  );
}

export default App;
