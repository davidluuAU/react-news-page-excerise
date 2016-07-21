var React = require('react');
var IconButton = require('./IconButton.jsx');

var SocialMedia = React.createClass({
    render: function() {
        var style = {
            display: "inline_block"
        };

        var createItem = function(item, index) {
            return <IconButton key={index + item} src={item.src} url={item.url}/>;
        };

        return (
            <div style={style}>
                {this.props.list.map(createItem)}
            </div>
        );
    }
});
module.exports = SocialMedia;
