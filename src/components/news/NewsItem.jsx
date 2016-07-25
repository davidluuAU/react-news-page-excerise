var React = require('react');
var PhotoGrid = require('../photo_grid/PhotoGrid.jsx');
var Thumbnail = require('../photo_grid/Thumbnail.jsx');

var NewsItem = React.createClass({
    render: function() {

        var style = {
            color: "black"
        };

        var locationStyle = {
            color: "grey",
            paddingTop: 5,
            fontWeight: "bold"
        }

        return (
            <div className="panel">
                <div className="panel-body" style={style}>
                    <div className="col-sm-2">
                        <Thumbnail src={this.props.icon} height={80} width={80}/>
                    </div>
                    <div className="col-sm-8">
                        <h4><b>{this.props.title}</b></h4>
                        <h4>{this.props.subtitle}</h4>
                        <br/>
                        <div>{this.props.content}</div>

                        <PhotoGrid images={this.props.images} height={100}/>

                        <div style={locationStyle}>{this.props.location}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NewsItem;
