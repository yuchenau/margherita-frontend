import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // Grid,
  Paper,
  // Link,
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
});

export default function SaleTable(props) {
  const classes = useStyles();
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
          <EachSale />
          <EachSale />
          <EachSale />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
