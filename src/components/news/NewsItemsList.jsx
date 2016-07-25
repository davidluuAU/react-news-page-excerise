var React = require('react');
var NewsItem = require('./NewsItem.jsx');

var NewsItemsList = React.createClass({
    render: function() {

        var baseStyle = {
            paddingTop: 10,
            paddingBottom: 10
        }

        var createItem = function(item, index) {            
          return <NewsItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} content={item.content} location={item.location} images={item.images}/>;
        };

        return(
            <div style={baseStyle}>
                {this.props.items.map(createItem)}
            </div>
        );
    }
});

module.exports = NewsItemsList;
