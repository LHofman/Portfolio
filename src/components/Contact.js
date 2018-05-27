import React, {Component} from 'react';
import {List, Button} from 'semantic-ui-react'
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
        <h1>Contact</h1>

  <List>
    <List.Item>
      <h3>Email: hofmanlennert@gmail.com</h3>
    </List.Item>
    <List.Item>
      <h3>{strings.contact.phone_number}: 0471/37.93.63</h3>
    </List.Item>
    <List.Item>
    <h3>LinkedIn: <a href='https://www.linkedin.com/in/lennert-hofman-66405667/' target='_blank' rel='noopener noreferrer'>link</a></h3>
    </List.Item>
  </List>
  </div>
)
  }
}
