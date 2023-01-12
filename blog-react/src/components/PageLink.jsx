import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PageLink() {

  const user =useSelector((state)=>(state.currentUser));

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <NavLink to='/' className="navbar-brand"> React-Blog </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav >
            <NavLink to='/board' className='nav-link' >포스트</NavLink>
            <NavLink to='/guest' className='nav-link' >방명록</NavLink>
            {
              user 
              ? <NavLink to='/mypage' className='nav-link' >마이페이지</NavLink>
              :<NavLink to='/loginform' className='nav-link' >로그인</NavLink>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageLink;