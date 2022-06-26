import React from "react";
import Notification from "./Notification";

type NotificationType = {
  id: number;
  message: string;
};
type NotificationListProps = {
  props?: any;
};
type NotificationListState = {
  notifications: NotificationType[];
};

const reservedNotifications: NotificationType[] = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer: NodeJS.Timer;

class NotificationList extends React.Component<
  NotificationListProps,
  NotificationListState
> {
  state: NotificationListState = {
    notifications: [],
  };

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({ notifications });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
