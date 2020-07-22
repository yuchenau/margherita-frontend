import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Orders from "../components/Orders";

export default function SalePanel(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
