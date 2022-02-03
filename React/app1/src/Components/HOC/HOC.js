import React from "react";

const fnHoc = (Component, compData) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: compData.countVal,
      };
    }
    updateCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    //10
    render() {
      return (
        <Component
          count={this.state.count}
          updateCount={this.updateCount}
          name={compData.name}
        />
      );
    }
  }

  return NewComponent;
};

export default fnHoc;
