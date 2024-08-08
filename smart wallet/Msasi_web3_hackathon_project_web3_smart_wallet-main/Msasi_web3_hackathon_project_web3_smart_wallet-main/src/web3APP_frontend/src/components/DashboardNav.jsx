import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdDashboard } from 'react-icons/md';

function DashboardNav() {
  return (
    <Navbar className="">
      
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            Signed in as: <a href="#login" className='text-light'>John Doe</a>
          </Navbar.Text>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default DashboardNav;