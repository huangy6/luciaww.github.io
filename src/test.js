import React, { Component } from 'react'
  
  var ProperListRender = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul>
      )
    }
  });
  React.render(<ProperListRender list={[1,2,3,4,5]} />, document.getElementById('proper-list-render1'));
  React.render(<ProperListRender list={[1,2,3,4,5,6,7,8,9,10]} />, document.getElementById('proper-list-render2'));