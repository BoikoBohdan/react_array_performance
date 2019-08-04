import React, { Component } from "react";
import { NoPerformance } from "./components/noPerformance";
import { Performance } from "./components/performance";
export class view extends Component {
  state = { performance: true };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  toogle = () => {
    const { performance } = this.state;
    this.setState({ performance: !performance });
  };

  renderCommentsByIds = () => {
    const { commentsIds } = this.props;
    return commentsIds.map(id => <Performance id={id} key={id} />);
  };

  render() {
    const { performance } = this.state;
    const { getUser } = this.props;
    return (
      <div>
        <button onClick={getUser}>Get Users List</button>
        <h1>
          Performance{" "}
          <span
            onClick={this.toogle}
            style={{
              background: performance ? "green" : "red",
              padding: 10,
              borderRadius: 5
            }}
          >
            {performance ? "on" : "off"}
          </span>
        </h1>
        <div>
          {performance ? this.renderCommentsByIds() : <NoPerformance />}
        </div>
      </div>
    );
  }
}
