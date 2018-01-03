import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { Card, Label, Accordion } from 'semantic-ui-react'
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
      <Card color="blue" raised={true}>
        <Card.Content>
          <Card.Header>
            <strong>{spell.name}</strong>
            <Label attached="top right" color="blue">Spell</Label>
          </Card.Header>
          <Card.Meta>
            <Accordion exclusive={false}>
              <Accordion.Title>
                Level: {spell.level}
              </Accordion.Title>
              <Accordion.Content>
                <div> Action Cost: {spell.casting_time} </div>
                <div> Duration: {spell.duration} </div>
                <div> Range: {spell.range} </div>
                <div> School: {spell.school} </div>
              </Accordion.Content>
            </Accordion>
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
