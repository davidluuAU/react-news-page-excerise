var React = require('react');
var Link = require('react-router').Link;

var LinkItem = React.createClass({
    render: function() {

        var style = {

            display: "inline"
        };

        var aStyle = {
            padding:"5px",
            color: "white",
            fontSize: 14,
            fontWeight: 'bold'
        }

        return (
            <div style={style}>
                <Link style={aStyle} to={this.props.link}>{this.props.text}</Link>
            </div>
        );
    }
});

module.exports = LinkItem;
