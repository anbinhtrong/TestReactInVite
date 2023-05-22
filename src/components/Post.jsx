import React, { Component } from 'react';
import Header from './Header'; 
import Article from './Article';

class Post extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Article />
        </div>
      );
    }
  }

  export default Post