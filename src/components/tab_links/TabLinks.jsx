var React = require('react');
var LinkItem = require('./LinkItem.jsx');

var TabLinks = React.createClass({
    render: function() {
        var style = {
            display: "inline_block"
        };

        var createItem = function(item, index) {
            return <LinkItem key={index + item} text={item.text} link={item.link}/>;
        };

        return (
            <div style={style}>
                {this.props.list.map(createItem)}
            </div>
        );
    }
});
module.exports = TabLinks;
