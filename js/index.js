'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Reactstrap = Reactstrap;
var Button = _Reactstrap.Button;
var Card = _Reactstrap.Card;
var CardImg = _Reactstrap.CardImg;
var CardBody = _Reactstrap.CardBody;
var CardText = _Reactstrap.CardText;
var CardTitle = _Reactstrap.CardTitle;
var CardSubtitle = _Reactstrap.CardSubtitle;
var Col = _Reactstrap.Col;
var Container = _Reactstrap.Container;
var Dropdown = _Reactstrap.Dropdown;
var DropdownItem = _Reactstrap.DropdownItem;
var DropdownMenu = _Reactstrap.DropdownMenu;
var DropdownToggle = _Reactstrap.DropdownToggle;
var Row = _Reactstrap.Row;
var Input = _Reactstrap.Input;
var Tooltip = _Reactstrap.Tooltip;
var NavLink = _Reactstrap.NavLink;
var NavbarBrand = _Reactstrap.NavbarBrand;
var NavbarToggler = _Reactstrap.NavbarToggler;
var NavItem = _Reactstrap.NavItem;
var Navbar = _Reactstrap.Navbar;
var Nav = _Reactstrap.Nav;

var Chapter = function Chapter(_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'no name' : _ref$name;
  var _ref$icon = _ref.icon;
  var icon = _ref$icon === undefined ? 'fa-circle-o' : _ref$icon;
  var _ref$desc = _ref.desc;
  var desc = _ref$desc === undefined ? '' : _ref$desc;

  _classCallCheck(this, Chapter);

  if (desc != '') this.desc = desc;else this.desc = name;
  this.name = name;
  this.icon = icon;
};

/*
Todo: 
pick icons for each chapter
reword each chapter
*/

var ch_intro = new Chapter({
  name: 'Intro'
});

var ch_basics = new Chapter({
  name: 'Basics'
});

var ch_uncertainty = new Chapter({
  name: 'Uncertainty'
});

var ch_largernetworks = new Chapter({
  desc: 'Larger Networks',
  name: 'Larger'
});

var ch_regularization = new Chapter({
  name: 'Regularization'
});

var ch_cnn = new Chapter({
  name: 'CNN',
  desc: 'Convolutional Neural Networks'
});

var ch_sandbox = new Chapter({
  name: 'Sandbox'
});

var ch_conclusion = new Chapter({
  name: 'Conclusion'
});

var ch_credits = new Chapter({
  name: 'Credits'
});

var chapters = [ch_intro, ch_basics, ch_uncertainty, ch_largernetworks, ch_regularization, ch_cnn, ch_sandbox, ch_conclusion, ch_credits];

var Project = function Project(_ref2) {
  var _ref2$name = _ref2.name;
  var name = _ref2$name === undefined ? 'no name' : _ref2$name;
  var _ref2$desc = _ref2.desc;
  var desc = _ref2$desc === undefined ? 'no desc' : _ref2$desc;
  var _ref2$url = _ref2.url;
  var url = _ref2$url === undefined ? '#' : _ref2$url;
  var _ref2$author = _ref2.author;
  var author = _ref2$author === undefined ? 'no author' : _ref2$author;
  var _ref2$img = _ref2.img;
  var img = _ref2$img === undefined ? 'https://images.unsplash.com/photo-1472345113808-03a78a564cc5?dpr=1&auto=compress,format&fit=crop&w=1353&h=&q=80&cs=tinysrgb&crop=' : _ref2$img;

  _classCallCheck(this, Project);

  this.desc = desc;
  this.name = name;
  this.url = url;
  this.img = img;
  this.author = author;
};

var ex_project = new Project({
  name: 'Example',
  desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
});

var projects = [ex_project, ex_project, ex_project, ex_project];

var Sandbox = function (_React$Component) {
  _inherits(Sandbox, _React$Component);

  function Sandbox() {
    _classCallCheck(this, Sandbox);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Sandbox.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Additional visualization tools!'
      ),
      React.createElement(
        Row,
        null,
        projects.map(function (project, index) {
          return React.createElement(
            Col,
            { sm: '6' },
            React.createElement(
              Card,
              { body: true },
              React.createElement(
                'a',
                { href: project.url },
                React.createElement(CardImg, { top: true, src: project.img, alt: 'Card image cap' })
              ),
              React.createElement(
                CardTitle,
                null,
                project.name
              ),
              React.createElement(
                CardSubtitle,
                null,
                'Created by ',
                project.author
              ),
              React.createElement(
                CardText,
                null,
                project.desc,
                '.'
              )
            )
          );
        })
      )
    );
  };

  return Sandbox;
}(React.Component);

var NavDescription = function (_React$Component2) {
  _inherits(NavDescription, _React$Component2);

  function NavDescription(props) {
    _classCallCheck(this, NavDescription);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.toggle = _this2.toggle.bind(_this2);
    _this2.state = {
      tooltipOpen: false
    };
    return _this2;
  }

  NavDescription.prototype.toggle = function toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  NavDescription.prototype.changeChapter = function changeChapter(name) {
    this.props.cb(this.props.name);
  };

  NavDescription.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('i', { onClick: this.changeChapter.bind(this), className: 'fa  ' + this.props.icon, 'aria-hidden': 'true', id: 'nav' + this.props.index }),
      React.createElement(
        Tooltip,
        { placement: 'down', isOpen: this.state.tooltipOpen, target: 'nav' + this.props.index, toggle: this.toggle, className: 'mytip' },
        this.props.desc
      )
    );
  };

  return NavDescription;
}(React.Component);

var MyNavBar = function (_React$Component3) {
  _inherits(MyNavBar, _React$Component3);

  function MyNavBar() {
    _classCallCheck(this, MyNavBar);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  MyNavBar.prototype.changeChapter = function changeChapter(num) {
    this.props.cb(num);
  };

  MyNavBar.prototype.render = function render() {
    var cb = this.changeChapter.bind(this);
    return React.createElement(
      'div',
      { id: 'mynavbar' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'NNet'
        )
      ),
      React.createElement(
        Nav,
        { id: 'chapters' },
        chapters.map(function (chapter, index) {
          return React.createElement(
            NavItem,
            null,
            React.createElement(
              NavLink,
              { href: '#' },
              ' ',
              React.createElement(NavDescription, { index: index,
                desc: chapter.desc,
                name: chapter.name,
                icon: chapter.icon,
                key: index,
                cb: cb })
            )
          );
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'a',
          { href: 'https://github.com/jenniezheng321/NeuroNet' },
          React.createElement('i', { className: 'fa fa-github-alt', 'aria-hidden': 'true' })
        )
      )
    );
  };

  return MyNavBar;
}(React.Component);

var Credits = function (_React$Component4) {
  _inherits(Credits, _React$Component4);

  function Credits() {
    _classCallCheck(this, Credits);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Credits.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'credits' },
      React.createElement(
        'h1',
        null,
        'Code'
      ),
      React.createElement(
        'h3',
        null,
        'NavBars By Jennie Zheng'
      ),
      React.createElement(
        'h3',
        null,
        'Blah By Blah'
      ),
      React.createElement(
        'h1',
        null,
        'Lessons'
      ),
      React.createElement(
        'h3',
        null,
        'Story By Blah'
      ),
      React.createElement(
        'h1',
        null,
        'Design'
      ),
      React.createElement(
        'h3',
        null,
        'Animal Pictures By Blah and Blah'
      )
    );
  };

  return Credits;
}(React.Component);

var ChapterWrapper = function (_React$Component5) {
  _inherits(ChapterWrapper, _React$Component5);

  function ChapterWrapper() {
    _classCallCheck(this, ChapterWrapper);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  ChapterWrapper.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'chapterwrapper' },
      this.props.children
    );
  };

  return ChapterWrapper;
}(React.Component);

var Application = function (_React$Component6) {
  _inherits(Application, _React$Component6);

  function Application() {
    _classCallCheck(this, Application);

    var _this6 = _possibleConstructorReturn(this, _React$Component6.call(this));

    _this6.state = {
      chapter: 'Credits'
    };
    return _this6;
  }

  Application.prototype.changeChapter = function changeChapter(chapter) {
    this.setState({
      chapter: chapter
    });
  };

  Application.prototype.render = function render() {
    var main = React.createElement('div', null);
    switch (this.state.chapter) {
      case 'Credits':
        main = React.createElement(Credits, null);
        break;
      case 'Sandbox':
        main = React.createElement(Sandbox, null);
        break;
      default:
        main = React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'TODO: ',
            this.state.chapter
          )
        );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(MyNavBar, { cb: this.changeChapter.bind(this) }),
      React.createElement(
        ChapterWrapper,
        null,
        main
      )
    );
  };

  return Application;
}(React.Component);

ReactDOM.render(React.createElement(Application, null), document.getElementById('app'));