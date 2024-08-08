import React, { useEffect, useState } from 'react'
import { Row,Card, Col, Container } from 'react-bootstrap'
import { FaUser, FaMoneyBillAlt, FaMoneyCheckAlt, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import DashboardNav from './components/DashboardNav';
import { web3APP_backend } from 'declarations/web3APP_backend';
import KwachaExchangeModal from './components/kwachaExcahngeModal';


function App() {
  const [balance , SetBalance] = useState({})
  const [updated, setUpdated] = useState(false)
  const {shilling,kwacha,bitcoin,dollar} = balance
  const transactionHistory = [
    { type: 'Deposit', amount: '200 USD', status: 'Pending', date: '2024-03-18' },
    { type: 'Withdraw', amount: '100 USD', status: 'Cleared', date: '2024-03-17' },
    { type: 'Withdraw', amount: '150 USD', status: 'Cleared', date: '2024-03-17' },

    // Add more transaction history items as needed
  ];

  useEffect(()=>{
    web3APP_backend.getBalance().then((balance) => {
      SetBalance(balance)
      
    });

  },[])

  useEffect(()=>{
    web3APP_backend.getBalance().then((balance) => {
      SetBalance(balance)
      
    });

  },[updated])

  const updateBalance =()=>{
    setUpdated(!updated);
    


  }
  console.log(kwacha)
  return (
    <div className='container-fluid bg-danger'>
    <Row >
      <div style={{ backgroundColor:'#352E5A',color:"#d9d9d9"}} className='col-3 p-4'>
        <div className='logo'>
         <h5 className='fw-bold'>Web35 smart wallet</h5>
        </div>
        <div>
      <div className='fw-bold ' style={{ padding: 10, fontSize:15 }}><MdDashboard /> Dashboard</div>
      <hr />
      <div className='fw-bold' style={{ padding: 10, fontSize:15  }}><FaMoneyBillAlt /> Deposit</div>
      <div className='fw-bold' style={{ padding: 10, fontSize:15 }}><FaMoneyCheckAlt /> Withdraw</div>
      <div className='fw-bold' style={{ padding: 10, fontSize:15 }}><FaClipboardList /> Pay Bills</div>
      <div className='fw-bold' style={{ padding: 10, fontSize:15 }}><FaUser /> Profile</div>
      <div className='fw-bold text-danger' style={{ padding: 10, fontSize:15 }}><FaSignOutAlt /> Logout</div>
    </div>

      </div>
      <div style={{backgroundColor:'#2c2449'}}className='col-9  '>
        <Row>
          <div>
            <DashboardNav />
          </div>
        </Row>
       
        <div style={{ overflowX: 'auto' }}>
      <Row className="d-flex flex-nowrap p-1">
        <Col className="mr-3">
          <Card className="shadow" style={{ width: '200px',backgroundColor:'#6647bf' }}>
            <Card.Body >
              <div className='text-light fw-bold'>Kwacha Balance</div>
              <p style={{color:'#d9d9d9'}} className=' fw-bold'>K {kwacha} </p>
              <KwachaExchangeModal updateBalance={updateBalance} />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mr-3">
        <Card className="shadow" style={{ width: '200px',backgroundColor:'#3e8421' }}>
            <Card.Body>
              <div className='text-light fw-bold'>Dollar Balance</div>
              <p style={{color:'#d9d9d9'}} className=' fw-bold'>USD {dollar}</p>
              <button className='btn btn-light btn-sm'>Exchange</button>

            </Card.Body>
          </Card>
          
        </Col>
        <Col className="mr-3">
          <Card className="shadow" style={{ width: '200px',backgroundColor:'#3363ad' }}>
            <Card.Body>
              <div className='text-light fw-bold'>Bitcoin Balance</div>
              <p style={{color:'#d9d9d9'}} className=' fw-bold'>{bitcoin} BTC</p>
              <button className='btn btn-light btn-sm'>Exchange</button>

            </Card.Body>
          </Card>
        </Col>
        <Col className="mr-3">
        <Card className="shadow" style={{ width: '200px',backgroundColor:'#aa5035' }}>
            <Card.Body>
              <div className='text-light fw-bold'>Shilling Balance</div>
              <p style={{color:'#d9d9d9'}} className=' fw-bold'>Sh {shilling}</p>
              <button className='btn btn-light btn-sm'>Exchange</button>

            </Card.Body>
          </Card>
         
        </Col>
        <Col>
          <Card className="shadow" style={{ width: '200px' }}>
            <Card.Body>
              <div className=' fw-bold'>Waste Management</div>
              <p style={{color:'#d9d9d9'}} className=' fw-bold'>500 Points</p>
              <button  className='btn btn-light btn-sm'>Exchange</button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    <div>
      {/* Balance cards row */}
      <Row className="d-flex flex-nowrap mb-3">
        {/* Balance cards here */}
      </Row>

      <div>
      {/* Balance cards row */}
      <Row className="d-flex flex-nowrap mb-3">
        {/* Balance cards here */}
      </Row>

      {/* Transaction history row */}
      <Row className="mb-3">
        <Container>
        <h5 style={{marginBottom:15}} className='text-light fw-bold'>Transaction History</h5>
          {transactionHistory.map((item)=>(
            <div>
              <div style={{color:'#D9D9D9',fontSize:10, display:"flex",justifyContent:'space-between'}}><span>{item.date}</span> <span>{item.type}</span> <span>{item.amount}</span> <span>{item.status}</span> <button className='btn btn-light btn-sm'> Print receipt</button>  </div>
              <hr style={{color:'white', marginBottom:10,}} />
              

            </div>
          )
            
          )}
        </Container>
      </Row>
    </div>
    </div>
      </div>

    </Row>



    </div>
  )
}

export default App