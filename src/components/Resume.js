import React, { Component } from 'react';
import './Resume.css'
import {
  Grid,
  Icon,
  Card,
  Button,
  Image,
  Feed,
  Rating
} from 'semantic-ui-react';
import image from '../resources/images/Me.jpg';
import cv from '../resources/Curriculum Vitae.pdf';

export default class Resume extends Component {
  getBulletIcon = () => <Icon className='red' name='circle' size='small'/>;
  getRating = rating => (
    <Rating
      style={{ float: 'right' }}
      defaultRating={rating}
      maxRating={5}
      disabled
    />
  );
  getLink = (text, link) => (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {text}
    </a>
  );

  render() {
    return (
      <div>
      <h3>{this.getLink('Download Resume', cv)}</h3>
      <br/>
      <Grid>
          <Grid.Column style={{ width: '30%', minWidth: '250px' }}>
            <Grid.Row>
              <h2>
                <Card>
                  <Image src={image} />
                  <Card.Content>
                    <Card.Header>
                      <h2>
                        <Icon name='user circle' /> Lennert Hofman
                      </h2>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content className='black'>
                    <p>
                      <b>Address</b>
                    </p>
                    <p>Evangeliestraat 87, 9220 Hamme</p>
                    <p>
                      <b>Phone</b>
                    </p>
                    <p>0471/37.93.63</p>
                    <p>
                      <b>E-mail</b>
                    </p>
                    <p>hofmanlennert@gmail.com</p>
                    <p>
                      <b>Date of Birth</b>
                    </p>
                    <p>10 December 1996</p>
                    {this.getLink(
                      'LinkedIn',
                      'https://www.linkedin.com/in/lennert-hofman-66405667/'
                    )}{' '}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    {this.getLink('Github', 'https://github.com/LHofman')}
                  </Card.Content>
                </Card>
              </h2>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column style={{ width: '35%', minWidth: '250px' }}>
            <Grid.Row>
              <h2>
                <Icon name='travel' />
                Experience
              </h2>
              <Feed>
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Feb 2018 - May 2018'
                  summary={
                    <p>
                      Intern @{' '}
                      {this.getLink('Skedify', 'http://www.skedify.me')}
                    </p>
                  }
                  extraText={
                    <div>
                      <p>Caching of the external API's</p>
                      <ul>
                        <li>Node.js</li>
                        <li>Redis</li>
                        <li>Jest.js</li>
                      </ul>
                    </div>
                  }
                />
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Jan 2017 - May 2017'
                  summary={
                    <p>
                      IT Support @{' '}
                      {this.getLink(
                        'De Meester',
                        'http://horecamaterialen-demeester.be/'
                      )}
                    </p>
                  }
                  extraText={'Maintaining the webshop'}
                />
                <br />
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Jul 2015 - Sep 2016'
                  summary={
                    <p>
                      Inventory Clerk @{' '}
                      {this.getLink(
                        'Colruyt',
                        'https://www.colruyt.be/nl/home'
                      )},
                      {this.getLink('Action', 'https://www.action.com/nl-be/')}
                    </p>
                  }
                />
                <br />
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Jul 2012 - Aug 2013'
                  summary={
                    <p>
                      Student Job @{' '}
                      {this.getLink(
                        'Belfius Lease',
                        'https://www.belfius-lease.be/nl/iws/language.html'
                      )}
                    </p>
                  }
                  extraText='Scanning, ordening and archiving of files'
                />
              </Feed>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <h2>
                <Icon name='student' />
                Education
              </h2>
              <Feed>
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Sep 2014 - Jun 2018'
                  summary='University College Ghent'
                  extraText='Bachelor in Applied Informatics'
                />
                <br />
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Sep 2010 - Jun 2014'
                  summary='Vrije handelsschool broeders'
                  extraText='Accountancy-Informatics'
                />
                <br />
                <Feed.Event
                  icon={this.getBulletIcon()}
                  date='Sep 2008 - Jun 2010'
                  summary='Sint-Jozef-Klein-Seminarie college'
                  extraText='Modern Science'
                />
              </Feed>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column style={{ width: '35%', minWidth: '300px' }}>
            <Grid.Row>
              <h2>
                <Icon name='chain' />
                Skills
              </h2>
              <ul>
                <li>OOP {this.getRating(4)}</li>
                <i>java, C#, VB.net</i>
                <li>XML {this.getRating(4)}</li>
                <li>Webdesign {this.getRating(4)}</li>
                <i>Html, Css, Sass</i>
                <li>ASP.NET {this.getRating(3)}</li>
                <i>MVC, Core</i>
                <li>JavaScript {this.getRating(3)}</li>
                <i>Angular, react, node, express</i>
                <li>Database {this.getRating(3)}</li>
                <i>SQLite, NoSql, Mongo</i>
                <li>Mobile Apps {this.getRating(2)}</li>
                <i>Swift + XCode</i>
              </ul>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <h2>
                <Icon name='flag' />
                Languages
              </h2>
              <ul>
                <li>Dutch {this.getRating(5)}</li>
                <li>English {this.getRating(4)}</li>
                <li>French {this.getRating(2)}</li>
              </ul>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <h2>
                <Icon name='tv' />
                Interests
              </h2>
              <ul>
                <li>Badminton</li>
                <li>Watching TV</li>
              </ul>
            </Grid.Row>
            <hr />
            <Grid.Row>
              <h2>
                <Icon name='drivers license' />
                Drivers License (Nov 2017)
              </h2>
            </Grid.Row>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}