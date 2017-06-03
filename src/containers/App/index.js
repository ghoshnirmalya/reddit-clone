import React, { Component } from 'react';
import * as firebase from "firebase";

import config from './firebase-config';

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
    posts: [],
    loading: true
  };

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');

    let _this = this;

    postsRef.on('value', function(snapshot) {
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          // https://github.com/ReactTraining/react-router/blob/v3/examples/passing-props-to-children/app.js#L56-L58
          firebase: firebase.database(),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;
