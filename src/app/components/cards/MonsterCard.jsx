import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react'
import Highlighter from 'react-highlight-words'

import StatBlock from 'app/components/display/StatBlock'
import Ability from 'app/components/display/Ability'
import Action from 'app/components/display/Action'

import style from 'style/style'

class MonsterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { monster, search } = this.props

    const highlightStyle = {
      backgroundColor: 'yellow'
    }

    const special_abilities = monster.special_abilities || []
    const abilities = special_abilities.map((ability, index) => {
      return <Ability key={index} name={ability.name} desc={ability.desc}/>
    })

    const guarded_actions = monster.actions || []
    const actions = guarded_actions.map((action, index) => {
      return <Action key={index} name={action.name} desc={action.desc}/>
    })

    const type = `${monster.size} ${monster.type}, ${monster.alignment}`

    return (
      <Card color={"red"} raised={true}>
        <Card.Content>
          <Card.Header>
            <span className={style.bold}>{monster.name}</span>
          </Card.Header>
          <Card.Meta>
            <div>
              {type}
            </div>
            <div>
              Challenge Rating: {monster.challenge_rating}
            </div>
          </Card.Meta>
          <Card.Description>
            <div>
              <div>
                <span className={style.bold}>Hit Points:</span> {monster.hit_points}
              </div>
              <div>
                <span className={style.bold}>Armor Class:</span> {monster.armor_class}
              </div>
              <div>
                <span className={style.bold}>Speed:</span> {monster.speed}
              </div>
            </div>
            <StatBlock
              str={monster.strength}
              dex={monster.dexterity}
              con={monster.constitution}
              int={monster.intelligence}
              wis={monster.wisdom}
              cha={monster.charisma}
            />
            <div className="abilities">
              {abilities}
              {actions}
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

MonsterCard.propTypes = {
  monster: PropTypes.object.isRequired,
  search: PropTypes.string,
}

export default MonsterCard;
