import React, {Component} from "react";
import { Message, Image, Button } from "semantic-ui-react";
import "../App.css";
import banner from '../resources/images/banner.jpg'
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
      <div className="center">
        <Button onClick={this.switchLanguage.bind(this)}>{this.state.switchLabel}</Button>
        <Image src={banner} />
        <Message compact info>
          <p>
            {strings.home.intro}
            <br/>
            {strings.home.what_to_find}
          </p>
        </Message>
      </div>
    )
  }
}
