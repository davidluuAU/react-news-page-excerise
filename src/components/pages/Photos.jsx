var React = require('react');
var PhotoGrid = require('../photo_grid/PhotoGrid.jsx');

var Photos = React.createClass({
    render: function() {
        var images = [
            {src:"https://upload.wikimedia.org/wikipedia/commons/6/67/Inside_the_Batad_rice_terraces.jpg"},
            {src:"http://feelgrafix.com/data/landscape/landscape-1.jpg"},
            {src:"https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg"},
            {src:"http://blog.agroknow.com/wp-content/uploads/2016/03/6835100-landscape.jpg"}
        ]

        return (
            <div className="panel">
                <div className="panel-body">
                    <PhotoGrid images={images} height={150} width={150}/>
                </div>
            </div>
        );
    }
});

module.exports = Photos;
