import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getBottles, deleteBottle } from '../actions/bottleActions';
import PropTypes from 'prop-types';

class Feed extends Component {
  // static propTypes = {
  //   getBottles: PropTypes.func.isRequired,
  //   bottle: PropTypes.object.isRequired,
  //   //isAuthenticated: PropTypes.bool
  // };

  componentDidMount() {
    this.props.getBottles();
  }

  onDeleteClick = id => {
    this.props.deleteBottle(id);
  };

  render() {
    const { bottles } = this.props.bottle || [];
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='Feed'>
            {bottles.map(({ _id, country }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
  
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  {country}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
Feed.propTypes = {
  getBottles: PropTypes.func.isRequired,
  bottle: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  bottle: state.bottle,
});

export default connect(
  mapStateToProps,
  { getBottles, deleteBottle }
)(Feed);