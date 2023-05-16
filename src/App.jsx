import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [update, setUpdate] = useState(false);
  const URL = `https://rickandmortyapi.com/api/character/?name=${name}`;
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setUpdate((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setItems(data.results);
        console.log(items);
      })
      .catch((error) => console.error(error));
  }, [update]);

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Rick and Morty API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <label htmlFor="input">Introduce name: &nbsp;</label>
      <input
        id="input"
        type="text"
        name="value"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleClick()}>Search</button>
      <h4>Name: {name}</h4>

      <CharacterCard fetchResult={items} />
    </div>
  );
}

export default App;
