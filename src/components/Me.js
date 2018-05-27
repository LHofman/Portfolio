import React, {Component} from "react";
import {Grid, Card, Image, Icon, Button } from "semantic-ui-react";
import "../App.css";
import me from "../resources/images/Me.jpg";
import {strings, switchLang} from './Localization'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      switchLabel: 'Verander naar het engels'
    }
  }
  switchLanguage() {
    this.setState({switchLabel: switchLang()})
  }
  render () {
    return (
      <div className='center'>
      <Button onClick={this.switchLanguage.bind(this)}>{this.state.switchLabel}</Button>
            <Grid>
    <Grid.Column style={{width: '300px'}}>
      <Grid.Row>
        <Card>
          <Image src={me} />
          <Card.Content>
            <Card.Header>
              <h2>
                <Icon name="user circle" /> Lennert Hofman
              </h2>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <p>
              <b>{strings.me.date_of_birth}</b>
            </p>
            <p>10 December 1996</p>
            <p>
              <b>{strings.me.education.label}</b>
            </p>
            <p>{strings.me.education.value}, HoGent</p>
            <p>
              <b>MBTI</b>
            </p>
            <p>ESTJ <i>(extraversie, sensing, thinking, judging)</i></p>
            <p>
              <b>Enneagram</b>
            </p>
            <p>9w1 / 1w9</p>
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid.Column>
    <Grid.Column style={{width: '300px'}}>
      <Grid.Row>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2>
                <Icon name="tv" /> Hobby's
              </h2>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <ul>
              <li>{strings.me.hobbys.badminton}</li>
              <li>{strings.me.hobbys.tv}</li>
            </ul>
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid.Column>
    <Grid.Column style={{width: '300px'}}>
      <Grid.Row>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2>
                <Icon name="tv" /> {strings.me.future.label}
              </h2>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            {strings.me.future.value}
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid.Column>
  </Grid>
  </div>
)
  }
}