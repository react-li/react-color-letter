import React from 'react';
import ReactDOM from 'react-dom';
import ColorLetter from '../src';

class App extends React.Component {

  render() {
    return (
      <div style={{marginLeft: '20px'}}>
        <ColorLetter name='a' size={50} radius={50}/>
        <ColorLetter name='b'/>
        <ColorLetter name='c' />
        <ColorLetter name='d' />
        <ColorLetter name='e' />
        <ColorLetter name='f' />
        <ColorLetter name='g' />
        <ColorLetter name='h' />
        <ColorLetter name='iii' />
        <ColorLetter name='gg' />
        <ColorLetter name='k' />
        <ColorLetter name='l' />
        <ColorLetter name='mg' />
        <ColorLetter name='ng' />
        <ColorLetter name='og' />
        <ColorLetter name='pg' />
        <ColorLetter name='qg' />
        <ColorLetter name='Rg' />
        <ColorLetter name='sg' />
        <ColorLetter name='tg' />
        <ColorLetter name='ug' />
        <ColorLetter name='vg' />
        <ColorLetter name='wg' />
        <ColorLetter name='xg' />
        <ColorLetter name='Yg' />
        <ColorLetter name='zg' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));