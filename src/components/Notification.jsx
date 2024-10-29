import { useNotifValue } from "../NotifContext";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };


  const notif = useNotifValue()
  return <div style={style}>{notif}</div>;
};

export default Notification;
