import * as React from "react";

export default class Tab extends React.Component {
  render() {
    const { section } = this.props;
    return (
      <div>
        {section}
      </div>
    );
  }
};