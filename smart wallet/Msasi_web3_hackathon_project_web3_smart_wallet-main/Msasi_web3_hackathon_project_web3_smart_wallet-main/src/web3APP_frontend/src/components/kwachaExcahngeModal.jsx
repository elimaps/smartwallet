import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { web3APP_backend } from 'declarations/web3APP_backend';

const KwachaExchangeModal = ({updateBalance}) => {
  const [showModal, setShowModal] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const paserdInput2 = parseFloat(input2)
  const [res,setRes] = useState(0)

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const result = await web3APP_backend.exchangeKwachaToDollarToShillingToBitcoin(input1, parseFloat(input2));
      console.log(result);
      setRes(result);
  
      // Update balance after successful exchange
      updateBalance();
      setInput1('')
      setInput2('')
    } catch (error) {
      console.error('Error exchanging currency:', error);
      // Handle error gracefully (e.g., show error message to the user)
    }
  
    handleClose();
  };
  

  return (
    <>
      <Button size='sm' variant="light" onClick={handleShow}>
        Exchange
      </Button>

      <Modal size='lg' show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exchange Kwacha To Another Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="input1">
              <Form.Label>Currency</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dollar"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="input2" style={{marginTop:5}}>
              <Form.Label>Amount of Kwacha to Exchage</Form.Label>
              <Form.Control
                type="number"
                placeholder="10"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </Form.Group>
            <Button className='w-100' style={{marginTop:10}} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KwachaExchangeModal;
