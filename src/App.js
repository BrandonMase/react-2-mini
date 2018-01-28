import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      fontFamily:'monospace',
      fontSize:12,
      fontColor:'black',
      allowEdit:'true',
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  updateColor(val){
    this.setState({fontColor:val});
  }

  updateSize(val){
    this.setState({fontSize:val});
  }

  updateFamily(val){
    this.setState({fontFamily:val});
  }

  updateEditStatus(val){
    this.setState({allowEdit:val});
  }

  render() {
    return (
      <div>
        <div className="headerBar">
        <EditToggle update={this.updateEditStatus} />
        <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />
        <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
        <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
        <TextContainer fontColor={this.state.fontColor} fontFamily={this.state.fontFamily} fontSize={this.state.fontSize} />
        </div>
      </div>
    )
  }
}

export default App;
