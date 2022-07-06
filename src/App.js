import logo from './logo.svg';
import './App.css';
import { Button, Card, Container, Box } from '@mui/material'
import img2 from '../src/img/img2.jpg';
import img1 from '../src/img/img1.jpg';
import img3 from '../src/img/img3.jpg';
import Imagesview from './components/Imagesview';
import Slider1 from './components/Slider1';
import AddNewForm from './components/addNewForm';
import Animation1 from './components/Animation';
import CardComponent from './components/CardComponent';
import PaperComponent from './components/PaperComponent';

function App() {
  // $('.carousel').carousel()
  return (
    <div className="App">
      <nav class="navbar navbar-light d-flex justify-content-between" style={{ backgroundColor: "#e3f2fd" }} >
        {/* <!-- Navbar content --> */}
        <div>
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
        <div>
          <a class="navbar-brand" href="#">Doors</a>
          <a class="navbar-brand" href="#">Steel</a>
          <a class="navbar-brand" href="#">Ideas</a>
          <a class="navbar-brand" href="#">About</a>
          <a class="navbar-brand" href="#">Gifts</a>
        </div>
        <div>
          {/* <a class="navbar-brand" href="#">Contact Us</a> */}
          <Button variant="contained">Contact Us</Button>
        </div>
      </nav>

      {/* <Imagesview /> */}

      {/* <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }} > */}
          {/* <AddNewForm/> */}
          {/* <Animation1 /> */}
        {/* </Box>
        <Slider1 />
      </Container> */}
<CardComponent content="Card 1"/>
<CardComponent content="Card 2"/> 
<PaperComponent content="Paper 1"/> 
    </div>
  );
}

export default App;
