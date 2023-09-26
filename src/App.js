import { Canvas } from './components/canvas1';
import { OffCanva } from './components/offcanvas';

import 'bootstrap/dist/css/bootstrap.min.css';

//There are two compinents breakdown. 1. OffCanvas, 2. Canvas.
//More components can be broken down more as per proper known requirements. 
function App() {
  return (
    <div>
      <OffCanva/> 
      <Canvas/> 
    </div>
  );
}

export default App;
