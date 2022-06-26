import React from "react";
import "./Notification.css";

type NotificationProps = {
  id: number;
  message: string;
};
type NotificationState = {
  state: any;
};

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called`);
  }

  render() {
    return (
      <div className="wrapper">
        <span className="messageText">{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
