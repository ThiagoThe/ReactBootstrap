import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1>React Bootstrap</h1>
      <Row>
        <Col className="col-12 col-lg-4 col-md-6">
          <Card>
            <Card.Header>
              <Card.Title>Cabeçalho</Card.Title>
            </Card.Header>
            <Card.Img src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card className="text">Esse é um texto</Card>
            </Card.Body>
            <Card.Footer>Rodapé</Card.Footer>
          </Card>
        </Col>

        {/* 
        m - margin -> [e: end, s: start, t: top, b: bottom, x: eixo x, y: eixo y] + tamanho (1 a 5)
        p - padding -> [e: end, s: start, t: top, b: bottom] + tamanho (1 a 5)
      */}
        <Col className="col-12 col-lg-4 col-md-6">
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" placeholder="Digite seu telefone" />
          </Form.Group>
          <Button className="m-2" variant="dark">
            Enviar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
