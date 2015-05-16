var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var TellactApp = require('./components/TellactApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var SignUpPage = require('./components/session/SignUpPage.react.jsx');
var StoriesPage = require('./components/stories/StoriesPage.react.jsx');
var StoryPage = require('./components/stories/StoryPage.react.jsx');
var StoriesNew = require('./components/stories/StoriesNew.react.jsx');

module.exports = (
    <Route name="app" path="/" handler={TellactApp}>
      <DefaultRoute handler={StoriesPage} />
      <Route name="login" path="/login" handler={LoginPage} />
      <Route name="signup" path="/signup" handler={SignUpPage} />
      <Route name="stories" path="/stories" handler={StoriesPage} />
      <Route name="story" path="/stories/:id" handler={StoryPage} />
      <Route name="new-story" path="/stories/new" handler={StoryNew} />
    </Route>
  );
