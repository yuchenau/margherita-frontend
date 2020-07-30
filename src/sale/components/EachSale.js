import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Button
          className={classes.actionButton}
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </TableCell>
      <TableCell align="left">..</TableCell>
      <TableCell align="left">..</TableCell>
      <TableCell align="left">..</TableCell>
      <TableCell align="left">
        <FormControl className={classes.formControl}>
          <Select value="">
            <MenuItem value={10}>..</MenuItem>
            <MenuItem value={20}>..</MenuItem>
            <MenuItem value={20}>..</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="left">..</TableCell>
    </TableRow>
  );
}
