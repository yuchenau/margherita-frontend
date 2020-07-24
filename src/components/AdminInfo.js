import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({});

export default function AdminInfo(props) {
  const classes = useStyles();
  const [username, setUsername] = useState[""];

  return (
    <div>
      <Avatar>{username}</Avatar>
    </div>
  );
}
