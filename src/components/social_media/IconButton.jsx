var React = require('react');

var IconButton = React.createClass({
    render: function() {

        var style = {
            padding:"5px"
        }

        return (
            <a href={this.props.url}>
                <img style={style} src={this.props.src} width="30" height="30"/>
            </a>
        );
    }
});

module.exports = IconButton;
