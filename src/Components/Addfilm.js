
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Addfilm = ({setData,data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [date,setDate]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")
    const [rating,setRate]=useState(0)
    const handleClick=()=>setData([...data,{id:Math.random(),name,rating,type,date,description,image}],handleClose())
    return (
      <div>
      <Button variant="warning" onClick={handleShow} >
      Add movie
     
    </Button>
  
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter movie Name" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Affiche</Form.Label>
          <Form.Control type="text" placeholder="Enter link movie " onChange={(e)=>setImage(e.target.value)} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="Number" placeholder="rating" onChange={(e)=>setRate(Number(e.target.value))}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="Enter date movie" onChange={(e)=>setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Enter type movie" onChange={(e)=>setType(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter type movie" onChange={(e)=>setDescription(e.target.value)} />
        </Form.Group>

        
  
       
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    )
}

export default Addfilm
