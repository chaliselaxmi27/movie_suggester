import React from 'react'
import { Navbar ,Container  } from 'react-bootstrap'
import { Link} from 'react-router-dom/cjs/react-router-dom.min'

const MovieNavBar = () => {
  
  return (
    <Navbar className=" bg-dark ">
    <Container>
      <Navbar.Brand  className='text-white'>MovieSuggestor </Navbar.Brand>
      <Navbar.Toggle  />
      <Navbar.Collapse className="justify-content-end gap-2" >
        <Navbar.Text  >
          <Link to="/login" className="text-white " >Login</Link>
  </Navbar.Text>
    <Navbar.Text>
    <Link to="/add" className="text-white" > Add movie  </Link>
    

      </Navbar.Text>

      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default MovieNavBar