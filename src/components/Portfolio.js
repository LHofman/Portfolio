import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react'
import '../App.css'
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
  <div className='center' style={{minWidth: '500px'}}>
  <Button onClick={this.switchLanguage.bind(this)}>{this.state.switchLabel}</Button>
        
    <Table celled size='large' striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{strings.portfolio.name}</Table.HeaderCell>
          <Table.HeaderCell>{strings.portfolio.language}</Table.HeaderCell>
          <Table.HeaderCell>{strings.portfolio.description}</Table.HeaderCell>
          <Table.HeaderCell>{strings.portfolio.link}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Calendar App</Table.Cell>
          <Table.Cell>JavaScript (MEAN)</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.calendar_app}
          </Table.Cell>
          <Table.Cell><a href='https://github.com/LHofman/calendar-app'>Github</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>First Aid</Table.Cell>
          <Table.Cell>Swift</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.first_aid}
          </Table.Cell>
          <Table.Cell><a href='https://github.com/LHofman/FirstAid-IOS-'>Github</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tracking App</Table.Cell>
          <Table.Cell>Java</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.tracking_app}
          </Table.Cell>
          <Table.Cell><a href='https://github.com/LHofman/TrackingApp'>Github</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Trackr</Table.Cell>
          <Table.Cell>JavaScript (MERN)</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.trackr}
          </Table.Cell>
          <Table.Cell><a href='https://github.com/LHofman/Trackr'>Github</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.portfolio.projects.internship.label}</Table.Cell>
          <Table.Cell>JavaScript (Node)</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.internship.description}
          </Table.Cell>
          <Table.Cell>{strings.portfolio.projects.internship.no_link}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bachelorproef</Table.Cell>
          <Table.Cell>JavaScript</Table.Cell>
          <Table.Cell>
            {strings.portfolio.projects.bachelorproef}
          </Table.Cell>
          <Table.Cell>WiP</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
  }
}