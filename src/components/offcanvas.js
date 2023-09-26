import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offcanvas.css';
import { FaArrowRight, FaLock, FaGgCircle, FaRegDotCircle, FaUnlock, FaArrowLeft, FaUserCog, FaUserCircle} from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const OffCanva =() => {

//State rendered for sidebars 
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  //Arrow functions toggling for both sidebars
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEnd = () => setShowEnd(false);
  const handleShowEnd = () => setShowEnd(true);

  //Two sidebars are designed which are collapsable 
  return (
    <>
    <div className='d-flex justify-content-between'>
      <FaArrowRight className="beer" onClick={handleShow}/>
      <FaArrowLeft className="beer" onClick={handleShowEnd}/>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='d-flex justify-content-center'>
          <Offcanvas.Title>13VENTURES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='heading'>
            <div className='pb-2'><FaGgCircle/><span className='ms-2'>Think Beyond</span></div>
            <div className='heading pt-2 ms-2'><FaRegDotCircle className='mx-2'/>MicroFrameworks</div>
         <ul>
            <li className='mt-3'><FaUnlock/><span className='ms-2'>Business Model Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2 pt-3'>Lean Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Business Envoirment Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Maeket Context Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Value Proposition Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Empathy Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Personal Building Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Value Chain Mapping Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Competitor Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Journey Mapping Canvas</span></li>
            <li className='mt-3'><FaLock/><span className='ms-2'>Market Sizzing Canvas</span></li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

{/* Sidebar for chat which is static as per derived from appendix design   */}
      <Offcanvas show={showEnd} onHide={handleCloseEnd} placement='end'>
        <Offcanvas.Header closeButton className='d-flex justify-content-center'>
          <Offcanvas.Title>Chat History</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='heading'>
    <DropdownButton variant="light" id="dropdown-item-button" title="Value Propositions">
      <div className='px-2'>
      <p> <FaUserCog className='admin'/> Hi Bob, I am starting a new company and I am trying to figure out my Value Propositions!</p>
      <p><FaUserCircle className='users'/>So for that you can use this dashboard and find it out</p>
      </div>
    </DropdownButton>
            
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
