import React, { Component } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  IconButton,
  Collapse,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class EmailForm extends Component {
  state = {
    email: "",
    publicKey: "",
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPass: "",
    showOptional: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  toggleOptional = () => {
    this.setState((prevState) => ({
      showOptional: !prevState.showOptional
    }));
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Configure Email
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Optional Settings</Typography>
            <IconButton onClick={this.toggleOptional}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={this.state.showOptional}>
            <TextField
              fullWidth
              margin="normal"
              label="PGP Public Key"
              name="publicKey"
              value={this.state.publicKey}
              onChange={this.handleChange}
              multiline
            />
            <TextField
              fullWidth
              margin="normal"
              label="SMTP Host"
              name="smtpHost"
              value={this.state.smtpHost}
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="SMTP Port"
              type="number"
              name="smtpPort"
              value={this.state.smtpPort}
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="SMTP User"
              name="smtpUser"
              value={this.state.smtpUser}
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="SMTP Password"
              type="password"
              name="smtpPass"
              value={this.state.smtpPass}
              onChange={this.handleChange}
            />
          </Collapse>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Subscribe
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

export default EmailForm;
