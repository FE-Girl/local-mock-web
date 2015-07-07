var React = require('react');

var LocalMock = require("./LocalMock.js");
var GlobalMock = require("./GlobalMock.js");

var List = React.createClass({
	render: function(){
		return (
			<div className='list'>
				<LocalMock />
				<GlobalMock />
			</div>
		)
	}
});

module.exports = List;