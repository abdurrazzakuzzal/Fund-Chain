'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Exito Labs\\Tutorial Projects\\Fund-Chain\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Address of Manager',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				style: { overflowWrap: 'break-word' }
			}, {
				header: requestsCount,
				meta: 'Number of Request',
				style: { overflowWrap: 'break-word' }
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Balance of Campaign (ether)',
				style: { overflowWrap: 'break-word' }
			}, {
				header: approversCount,
				meta: 'Number of Approvers',
				style: { overflowWrap: 'break-word' }
			}];
			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, ' Campaign Show '), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, 'View Requests')))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBUTs7QUFDdEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztnQ0FnQlM7Z0JBT1QsS0FQUyxBQU9KO09BUEksQUFFWixpQkFGWSxBQUVaO09BRlksQUFHWixpQkFIWSxBQUdaO09BSFksQUFJWiw2QkFKWSxBQUlaO09BSlksQUFLWix1QkFMWSxBQUtaO09BTFksQUFNWix3QkFOWSxBQU1aLEFBR0Q7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047V0FBTyxFQUFDLGNBSkksQUFDYixBQUdRLEFBQWU7QUFIdkIsQUFDQyxJQUZZO1lBTWIsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO1dBQU8sRUFBQyxjQVRJLEFBTWIsQUFHUSxBQUFlO0FBSHZCLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047V0FBTyxFQUFDLGNBZEksQUFXYixBQUdRLEFBQWU7QUFIdkIsQUFDQztZQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTRCLEFBQ3BDO1VBRkQsQUFFTyxBQUNOO1dBQU8sRUFBQyxjQW5CSSxBQWdCYixBQUdRLEFBQWU7QUFIdkIsQUFDQztZQUlELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtXQUFPLEVBQUMsY0F4QlYsQUFBYyxBQXFCYixBQUdRLEFBQWUsQUFHeEI7QUFOQyxBQUNDO3dDQUtLLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxvQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0U7QUFERjtXQURELEFBQ0MsQUFDRSxBQUFLLEFBRVAsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFOSCxBQUNDLEFBSUMsQUFDQyxBQUdGO0FBSEU7eUJBR0QsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLHlDQUFPLFNBQVI7ZUFBQTtpQkFBQTtBQUFBO01BaEJQLEFBQ0MsQUFFQyxBQVNDLEFBQ0MsQUFDQyxBQUNDLEFBQ0MsQUFRUDs7Ozs7d0csQUEvRTRCOzs7OztZQUN0QjtBLG1CQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O2VBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O1lBQTlDO0E7O2tCQUdJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDckI7OEJBQXFCLFFBRmYsQUFFZSxBQUFRLEFBQzdCO2tCQUFTLFFBSEgsQUFHRyxBQUFRLEFBQ2pCO3dCQUFlLFFBSlQsQUFJUyxBQUFRLEFBQ3ZCO3lCQUFnQixRQUxWLEFBS1UsQUFBUSxBQUN4QjtrQkFBUyxRLEFBTkgsQUFNRyxBQUFRO0FBTlgsQUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFSCxBLEFBbkYyQjs7a0JBbUYzQixBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovRXhpdG8gTGFicy9UdXRvcmlhbCBQcm9qZWN0cy9GdW5kLUNoYWluIn0=