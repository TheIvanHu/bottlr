import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getBottles, deleteBottle } from "../actions/bottleActions";
import PropTypes from "prop-types";

class Feed extends Component {
  // static propTypes = {
  //   getBottles: PropTypes.func.isRequired,
  //   bottle: PropTypes.object.isRequired,
  //   //isAuthenticated: PropTypes.bool
  // };

  componentDidMount() {
    this.props.getBottles();
  }

  onDeleteClick = (id) => {
    this.props.deleteBottle(id);
  };

  render() {
    const { bottles } = this.props.bottle || [];
    return (
      <Container>
        <ListGroup>
          {bottles.map(({ _id, country, title, message }) => (
            <ListGroupItem>
              <div>
                <Card body color="light">
                  <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {country}
                    </CardSubtitle>
                    <CardText>{message}</CardText>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
Feed.propTypes = {
  getBottles: PropTypes.func.isRequired,
  bottle: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  bottle: state.bottle,
});

export default connect(mapStateToProps, { getBottles, deleteBottle })(Feed);
