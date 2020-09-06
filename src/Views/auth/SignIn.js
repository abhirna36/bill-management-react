import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { loginUser } from "../../actions/index";
import { Redirect } from "react-router-dom";
import Text from "../common/Text";
import "./SignIn.scss";

const SignIn = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      setError(false);
      props.loginUser({ username, password });
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            title="Login Tech Support App"
          />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.loginBtn}
              onClick={() => handleLogin()}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>

      {props.loginSuccess ? (
        <Redirect push to="/dashboard" />
      ) : (
        <Text textStyle={"error-message-text"} text={props.loginError} />
      )}
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `auto`,
    },
    loginBtn: {
      marginTop: 2,
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      marginTop: 10,
    },
  })
);

const mapStateToProps = ({ auth }) => {
  const { loginSuccess, loginError } = auth;
  return { loginSuccess, loginError };
};

export default connect(mapStateToProps, {
  loginUser,
})(SignIn);
