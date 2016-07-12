var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = require('history');

var UserRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;
var AppHistory = UserRouterHistory(CreateHashHistory) ({
    queryKey: false
});

var Base = require('./components/pages/Base.jsx');
var News = require('./components/pages/News.jsx');
var Photos = require('./components/pages/Photos.jsx');

var Routes = (
        <Router history={AppHistory}>
            <Route path="/" component={Base}>
                <Route path="/news" component={News} />
                <Route path="/photos" component={Photos} />
            </Route>
        </Router>
);

module.exports = Routes;
