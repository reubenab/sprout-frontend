import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';

export class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header className={ styles.default }>
        <h1>Sprout</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
