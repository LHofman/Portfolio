import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {strings, switchLang} from './Localization'

class Navbar extends Component {
  constructor() {
    super();
    this.state = { 
      activeItem: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    const url = window.location.href
    const path = url.substring(url.lastIndexOf('/')+1)
    this.setState({activeItem: path})
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name }); 
  }


  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted vertical>
        <Menu.Item
          as={Link} to='/'
          name='Home'
          active={activeItem === 'Home' || activeItem === ''}
          onClick={this.handleItemClick}>
          Home
        </Menu.Item>

        <Menu.Item
          as={Link} to='/Me'
          name='Me'
          active={activeItem === 'Me'}
          onClick={this.handleItemClick}>
          Me
        </Menu.Item>

        <Menu.Item
          as={Link} to='/Resume'
          name='Resume'
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}>
          Resume
        </Menu.Item>
          
        <Menu.Item
          as={Link} to='/Portfolio'
          name='Portfolio'
          active={activeItem === 'Portfolio'}
          onClick={this.handleItemClick}>
          Portfolio
        </Menu.Item>
          
        <Menu.Item
          as={Link} to='/Contact'
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}>
          Contact
        </Menu.Item>

      </Menu>
    )
  }
}

export default Navbar;
