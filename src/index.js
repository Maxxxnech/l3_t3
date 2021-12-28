import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

//{text, number} -> props.text, props.number
function NewComponent1({ text, number }) {
  return (
    <>
      <h3>NewComponent1</h3>
      <div>{text}</div>
      <div>{number}</div>
    </>
  );
}

const NewComponent2 = (props) => (
  <>
    <h3>NewComponent2</h3>
    <div>{props.text}</div>
  </>
);

class NewComponent3 extends React.Component {
  render() {
    return (
      <>
        <h3>NewComponent3</h3>
        <div>{this.props.text}</div>
        <div>{this.props.number}</div>
      </>
    );
  }
}

class NewComponent4 extends React.Component {
  styleParams4 = { marginLeft: "20px", color: "red" };

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div style={this.styleParams4}>
        <h3>{this.constructor.name}</h3>
        <div>{this.props.text}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class NewComponent5 extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.constructor.name}</h3>
        <div>{this.props.obj.text}</div>
      </div>
    );
  }
}
class NewComponent6 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.constructor.name}</h3>
        <div>{this.props.obj.text}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <NewComponent1 text="mytext" number={5} />
    <NewComponent2 text={<NewComponent1 text="mytext" number={5} />} />
    <NewComponent3 text="myNewtext_3" number={3} />
    <NewComponent4 text="myNewtext_4">
      <NewComponent1 text="mytext" number={5} />
    </NewComponent4>
    <NewComponent4
      text="myNewtext_4"
      children={<NewComponent1 text="mytext" number={5} />}
    />
    <NewComponent5 obj={{ text: "text_5" }} /> 
    <NewComponent6 obj={{ text: "text_6" }} />
  </>,
  document.getElementById("root")
);
/*
   Bad style:
  <NewComponent5 obj={{ text: "text_5" }} /> 
    <NewComponent6 obj={{ text: "text_6" }} /> 
*/ 