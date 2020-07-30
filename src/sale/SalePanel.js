import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getOrders } from "../api/order";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import EachSale from "./components/EachSale";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
}, []);

export default function SaleTable(props) {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await getOrders();
      setOrders(response);
    }
    fetchOrders();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell align="left">Orders</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Order Status</TableCell>
            <TableCell align="left">Placed At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.map(order => (
            <EachSale key={order._id} order={order}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
