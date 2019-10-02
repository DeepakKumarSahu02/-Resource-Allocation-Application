import React from 'react';
import Prog from './disp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
const App: React.FC = () => {
  return (
    <div className="Cover">
    <Container>
      <Row>
        <Col className="Head"><h1>Resource Allocation Application</h1></Col>
      </Row>
      <Row>
        <Col className="Body"><Prog /></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
