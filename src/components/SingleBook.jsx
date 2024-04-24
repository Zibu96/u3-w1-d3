import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    success: false,
  };

  render() {
    const cardStyle = {
      width: "18rem",
      backgroundColor: this.state.success ? "green" : "white",
    }; // Change background
    return (
      <Card style={cardStyle} onClick={() => this.setState({ success: true })}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
