var React = require('react');

var GlobalMock = React.createClass({
	render: function(){
		return (
			<div className='globalMock'>
				<b>world</b>
			</div>
		)
	}
});

module.exports = GlobalMock;