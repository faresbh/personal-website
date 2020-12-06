import React, { Component } from "react";
import App from "../elements/App";
import AppsJSON from "../../apps.json";

class Apps extends Component {
  constructor(props) {
    super();
    this.state = { apps: [] };
  }

  componentDidMount() {
        let apps = [];
        let data = AppsJSON;
        data = data.slice(0, 4);
        data.forEach((element, index) => {
          apps.push(
            <div className="column" key={index}>
              <App
                key={index}
                name={element.name}
                appStoreURL={element.appStoreURL}
                icon={element.icon}
                description={element.description}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          apps.push(<div className="column"></div>);
        }
        console.log(apps);
        this.setState({ apps: apps });
  }

  render() {
    return (
      <section className="section" id="apps">
        <div className="container">
          <h1 className="title">Apps</h1>
          <div className="columns">{this.state.apps}</div>
        </div>
      </section>
    );
  }
}

export default Apps;
