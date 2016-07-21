var React = require('react');
var SocialMedia = require('./../social_media/SocialMedia.jsx');
var TabLinks = require('./../tab_links/TabLinks.jsx');

var Base = React.createClass({
    render: function() {

        var socialMedia = [
            {url:"http://www.facebook.com", src:"http://www.iconsdb.com/icons/preview/white/facebook-3-xxl.png"},
            {url:"http://www.twitter.com", src:"http://www.teammeadowsja.com/images/twitter.png"},
            {url:"http://www.instagram.com", src:"http://www.iconsplace.com/icons/preview/white/instagram-256.png"},
            {url:"http://www.linkedin.com", src:"http://www.cadredc.com/wp-content/themes/cadre-custom/images/icon_white_linkedin.png"},
            {url:"", src:"http://www.iconsdb.com/icons/preview/white/email-12-xxl.png"}
        ];

        var links = [
            {link:"news", text:"NEWS"},
            {link:"photos", text:"PHOTOS"}
        ];

        var headerStyle = {
            color: "white",
            width: "100%",
            height: "200px",
            position:"absolute",
            top: 0,
            left: 0,
            backgroundColor: "#3E50B5"
        };

        var greyStyle = {
            width: "100%",
            height: "100%",
            position:"absolute",
            top: "200px",
            left: 0,
            backgroundColor: "#E9E9ED"
        };

        var bodyStyle = {
            color: "white"
        };

        var socialStyle = {
            position: "absolute",
            bottom: 0,
            right: 0
        };

        var tabRowStyle = {
            height: "50px"
        }

        var tabStyle = {
            position: "absolute",
            bottom: 0,
            right: 0
        };

        return (
            <div>
                <div id="header" style={headerStyle}></div>
                <div id="grey" style={greyStyle}></div>
                <div className="container" style={bodyStyle}>
                        <row>
                            <div className="col-sm-8 col-sm-offset-2">
                                <h1>Country News</h1>
                                <div style={socialStyle}><SocialMedia list={socialMedia}/></div>
                            </div>
                        </row>
                        <row>
                            <div className="col-sm-8 col-sm-offset-2">Top stories in my country</div>
                        </row>
                        <row>
                            <div className="col-sm-8 col-sm-offset-2" style={tabRowStyle}>
                                <div style={tabStyle}><TabLinks list={links}/></div>
                            </div>
                        </row>
                        <row>
                            <div className="col-sm-8 col-sm-offset-2">{this.props.children}</div>
                        </row>

                </div>
            </div>
        );
    }
});

module.exports = Base;
