var React = require('react');
var NewsItemsList = require('../news/NewsItemsList.jsx');

var News = React.createClass({
    render: function() {

        var news = [
            {
                icon: "https://www.laptrade.com/media/icons/icon-company-incorporation.png",
                title:"Obesity in America",
                subtitle:"Why are Americans so fat?",
                content:"Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unreset have sprung up due to this debate",
                images: [{src:"https://i.ytimg.com/vi/uCjfgiteDAI/maxresdefault.jpg"}, {src:"http://www.macforbeginners.com/wp/wp-content/uploads/2015/06/desktop-print-screen-1024x576.jpg"}],
                location:"Kentucky, USA"
            },
            {
                icon: "https://cdn2.iconfinder.com/data/icons/business-241/256/business_company_structure-512.png",
                title:"Obesity in America",
                subtitle:"Why are Americans so fat?",
                content:"Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unreset have sprung up due to this debate",
                images: [{src:"https://i.ytimg.com/vi/uCjfgiteDAI/maxresdefault.jpg"}],
                location:"Kentucky, USA"
            },
            {
                icon: "http://www.rentsys.com/images/company.png",
                title:"Obesity in America",
                subtitle:"Why are Americans so fat?",
                content:"Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unreset have sprung up due to this debate",
                images: [{src:"https://i.ytimg.com/vi/uCjfgiteDAI/maxresdefault.jpg"}],
                location:"Kentucky, USA"
            }
        ];

        return (
            <div className="row">
                <div className="col-sm-12">
                    <NewsItemsList items={news}/>
                </div>
            </div>

        );
    }
});

module.exports = News;
