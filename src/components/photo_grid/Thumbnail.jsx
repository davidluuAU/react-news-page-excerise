var React = require('react');
var Thumbnail = React.createClass({
    render: function() {

        var style = {
            marginRight: 10
        }

        if (this.props.height != null) {
            style.height = this.props.height;
        }

        if (this.props.width != null) {
            style.width = this.props.width;
        }

        return (
            <a href="#">
                <img src={this.props.src} style={style}></img>
            </a>
        );
    }
});

module.exports = Thumbnail;
