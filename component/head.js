var React = require('react');
var mui = require('material-ui');

var ThemeManager = new mui.Styles.ThemeManager(),
    RaisedButton = mui.RaisedButton;

var Head = React.createClass({

	childContextTypes: {
		muiTheme:React.PropTypes.object
	},

	getChildContext:function(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},

	render: function(){
		return (
			<head className="head">
				<h1 className="logo">Lock-mock</h1>
				<RaisedButton label="Default" />
			</head>
		)
	}
})

module.exports = Head;