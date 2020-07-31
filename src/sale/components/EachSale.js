import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { changeStatus, deleteOrder } from "../../api/order";

const useStyles = makeStyles({
  actionButton: {
    marginRight: 10,
  },
  formControl: {
    minWidth: 120,
  },
});

export default function EachSale(props) {
  const classes = useStyles();
  const [orderStatus, setOrderStatus] = useState("");
  const { order } = props;

  useEffect(() => {
    setOrderStatus(order.status);
  }, [order]);

  const hanldeStatusChange = async (e) => {
    setOrderStatus(e.target.value);
    await changeStatus(order._id, e.target.value);
  };

  const handleDeleteOrder = async () => {
    await deleteOrder(order._id);
    window.location.reload();
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDeleteOrder()}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </TableCell>
      <TableCell align="left">
        <ul>
          {order &&
            order.orders.map((item) => (
              <li key={item._id}>
                {item.productId.name} x {item.quantity}
              </li>
            ))}
        </ul>
      </TableCell>
      <TableCell align="left">{order.name}</TableCell>
      <TableCell align="left">{order.shippingAddress}</TableCell>
      <TableCell align="left">
        <FormControl className={classes.formControl}>
          <Select value={orderStatus} onChange={hanldeStatusChange}>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Prepared">Prepared</MenuItem>
            <MenuItem value="Deliverd">Deliverd</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="left">{order.time}</TableCell>
    </TableRow>
  );
}
