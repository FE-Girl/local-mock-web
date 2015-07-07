var React = require('react');
var mui = require('material-ui');
var $ = require('jquery');

var Head = require("./Head.js");
var List = require("./List.js");

React.render(
	<div>
		<Head />
		<List />
	</div>,
	document.getElementById('content')
);
