import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react'
import Highlighter from 'react-highlight-words'

class SpellCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spell, search } = this.props

    const highlightStyle = {
      backgroundColor: 'yellow'
    }

    return (
      <Card color={"blue"} raised={true}>
        <Card.Content>
          <Card.Header>
            <strong>{spell.name}</strong>
          </Card.Header>
          <Card.Meta>
            (Level: {spell.level})
          </Card.Meta>
          <Card.Description>
            <Highlighter
              searchWords={[search]}
              textToHighlight={spell.description}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

SpellCard.propTypes = {
  spell: PropTypes.object.isRequired,
  search: PropTypes.string,
}

export default SpellCard;
