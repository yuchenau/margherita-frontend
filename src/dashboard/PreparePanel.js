import React, { useEffect } from "react";
import { getOrders } from "../api/order";

export default function PreparePanel(props) {
  // const [orders, setOrders] = useState({});
  useEffect(() => {
    getOrders().then((res) => {
      // console.log(res);
    });
  }, []);
  return <div></div>;
}
