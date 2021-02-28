import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../layouts/header";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Image, Save } from "@material-ui/icons";
import { event } from "jquery";
import { emailRegex, mobileRegex, nameRegex } from "../validation";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  fieldStyle: {
    margin: 10,
  },
}));

export default function Loco() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = () => {
    if (!emailRegex.test(email)) {
      setEmailErr(true);
    } else if (!mobileRegex.test(mobile)) {
      setMobileErr(true);
    } else if (!nameRegex.test(name)) {
      setNameErr(true);
    } else {
      const temp = data ? data : [];

      temp.push({ name, email, mobile });
      setData(temp);
      console.log(data);
    }
  };

  //   const getPostData = async () => {
  //       try {

  //       } catch (error) {

  //       }
  //   };

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Container>
        <Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(event) => {
                      setEmailErr(false);
                      setEmail(event.target.value);
                    }}
                    error={emailErr}
                    helperText={emailErr ? "Please enter valid email" : ""}
                    fullWidth
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    onChange={(event) => {
                      setMobileErr(false);
                      setMobile(event.target.value);
                    }}
                    error={mobileErr}
                    helperText={mobileErr ? "please enter valid mobile" : ""}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onChange={(event) => {
                      setNameErr(false);
                      setName(event.target.value);
                    }}
                    error={nameErr}
                    helperText={nameErr ? "please enter valid name" : ""}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                    onClick={handleChange}
                    startIcon={<Save />}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card></Card>
          </Grid>
        </Grid>
        {!data ? (
          <h1>Data not available</h1>
        ) : (
          data.map((item, index) => {
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <Image />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.email} />
            </ListItem>;
          })
        )}
      </Container>
    </div>
  );
}
