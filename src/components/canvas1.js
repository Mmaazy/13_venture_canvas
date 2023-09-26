import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaLocationArrow, FaUserCircle, FaUserCog } from 'react-icons/fa';
import './canvas1.css';

 export const Canvas = () =>{

//State is been used to show and render chats. 
  const [show, setShow] = useState(false);
  const [newItem, setNewItem] = useState(' ');
  const [items, setItems] = useState([]);

  //functions toggling for pop up modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addItem = () =>{
    if(!newItem){
      alert("Empty message.");
      return;
    }

    const items = {
      id:Math.floor(Math.random*1000),
      value: newItem,
    }
    setItems(oldList => [...oldList, items])
    setNewItem('');
  }

    return(
      //The main lay out for dashboard 
      <body>
      <form class="js-form">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2 col-lg-2 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Key Partners</h5>
                  <div class="form-group">
                    <textarea
                      name="key-partners"
                      disabled
                      placeholder='Disabled'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Key Activities</h5>
                      <div class="form-group">
                        <textarea
                          name="key-activities"
                          disabled
                      placeholder='Disabled'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Key Resources</h5>
                      <div class="form-group">
                        <textarea
                          name="key-resources"
                          disabled
                      placeholder='Disabled'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Value Propositions</h5>
                  <div class="form-group">
                    <textarea
                      name="value-propositions"
                      onkeyup="saveButton();"
                    ></textarea>
                      <div className='d-flex justify-content-center'>
                      <Button variant="success" onClick={handleShow}>
                        Chat
                    </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Customer Relationships</h5>
                      <div class="form-group">
                        <textarea
                          name="customer-relationships"
                          disabled
                      placeholder='Disabled'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Marketing Channels</h5>
                      <div class="form-group">
                        <textarea
                          name="marketing-channels"
                          disabled
                      placeholder='Disabled'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Customer Segment</h5>
                  <div class="form-group">
                    <textarea
                      name="customer-segment"
                      disabled
                      placeholder='Disabled'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Cost Structure</h5>
                  <div class="form-group">
                    <textarea
                      name="cost-structure"
                      disabled
                      placeholder='Disabled'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Revenue Streams</h5>
                  <div class="form-group">
                    <textarea
                      name="revenue-streams"
                      disabled
                      placeholder='Disabled'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

{/* One of the field made functional where user can type in the text area and also open chat on modal to render chats and communicate */}
{/* All the other fields are kept disabled */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Value Propositions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className='chatarea'>
            <p> <FaUserCog className='admin'/> Hi Bob, I am starting a new company and I am trying to figure out my Value Propositions!</p>
            <p>
              {items.map(item=>{
                return(
                  <div className='d-flex'>
                    <FaUserCircle className='users'/>
                  <p key={item.id}>{item.value}</p>
                  </div>
                )
              })}
            </p>
            </div>
            <Form.Group
              className="mb-3 textf"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* Chats being rendered on modal */}
              <FaLocationArrow className='iconm' onClick={()=>addItem()}/>
              <Form.Control as="textarea" rows={2} placeholder='Talk to bob!' value={newItem} onChange={e=>setNewItem(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close Chat
          </Button>
        </Modal.Footer>
      </Modal>
</body>
    )
 }