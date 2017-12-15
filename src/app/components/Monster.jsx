import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Monster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <h3>{name}</h3>
        
      </div>
    );
  }
}

Monster.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Monster;
