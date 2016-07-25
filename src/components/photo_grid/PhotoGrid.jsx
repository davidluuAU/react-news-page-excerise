var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var PhotoGrid = React.createClass({
    render: function() {

        var baseStyle = {
            paddingTop: 20
        }

        var thumbnailStyle = {
            paddingRight: 10,
            display: "inline"
        }

        var height = this.props.height;
        var width = this.props.width;
        var createItem = function(image, index) {
          return(
            <div key={index} style={thumbnailStyle}><Thumbnail src={image.src} height={height} width={width}/></div>
          );
        };

        return(
            <div style={baseStyle}>
                {this.props.images.map(createItem)}
            </div>
        );
    }
});

module.exports = PhotoGrid;
