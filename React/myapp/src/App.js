import React, { Component } from 'react';
import Photos from './photos';
import AddPhoto from './AddPhoto';

class App extends Component {
  state = {
    photoList: [
      {id:4, author: 'a', name: 'er'},
      {id:1, author: 'b', name: 'vb'},
      {id:2, author: 'c', name: 'nm'},
      {id:3, author: 'd', name: 'we'}
    ]
  }

  addPhoto = (photo) => {
    photo.id = Math.random();
    let photos = [...this.state.photoList, photo];
    this.setState({
      photoList: photos
    })
  }

  deletePhoto = (id) => {
    let photos = this.state.photoList.filter(photo => {
      return photo.id !== id;
    });

    this.setState({
      photoList: photos
    });
  }

  componentDidMount(){
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first app</h1>
        <p>Welcome!</p>
        <Photos name="Anastasia" number="0" photos={this.state.photoList} deletePhoto={this.deletePhoto}/>
        <AddPhoto addPhoto={this.addPhoto}/>
      </div>
    );
  }
}

export default App;
