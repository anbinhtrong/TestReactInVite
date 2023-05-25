import React, { Component } from 'react';
import Header from './Header'; 
import Article from './Article';

class Post extends React.Component {
    render() {
      const headers = {
        title: "Computer Hope",
        subTitle: "Free computer help since",
        year: 1988
      };
      return (
        <>
          <Header headerContent={headers} />
          <Article />
        </>
      );
    }
  }

  export default Post