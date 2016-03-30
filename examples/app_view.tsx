import * as React from 'react';
import {
  Component
} from 'react';
import MenuView from './menu_view';

export default class AppView extends Component<{}, {}>{
  render() {
    return (
      <div>
        <MenuView/>
        {this.props.children}
      </div>
    );
  }
}
