import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import EditModal from "./EditModal";
import todo from '../assets/todo.png';

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-nav">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
            <img src={todo} alt="Todo img" width="30"
              height="30"
              className="d-inline-block align-top" />{'  '}
            TODO APP
          </Navbar.Brand>
          <EditModal
            id={0}
            title={''}
						edit={false}
					/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;