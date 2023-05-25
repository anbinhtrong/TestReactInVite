// const Header = function () {
//   return <div class="container-fluid p-5 bg-primary text-white text-center">
//     <h1>My First Bootstrap Page</h1>
//     <p>Resize this responsive page to see the effect!</p>
//   </div>;
// };

//   export default Header
import React, { Component } from 'react';
class Header extends React.Component {
  render() {
    //const {headerContent} = this.props;
    const headerContent = this.props.headerContent;
    return (
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>{headerContent.title}</h1>
        <p>{headerContent.subTitle} {headerContent.year}</p>
      </div>
    );
  }
}
export default Header