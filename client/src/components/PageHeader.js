import React, { Component } from "react";

class PageHeader extends Component {
  render() {
    return (
      <div>
        <div className="fwHeader">
          <h1 class="pageHeader">{this.props.pageTitle}</h1>
        </div>
      </div>
    );
  }
}

export default PageHeader;
