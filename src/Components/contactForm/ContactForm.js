import React, { Component } from "react";
import axios from "axios";
import ContactDetials from "./contactDetials";






const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    emailIsValad: false,
    error: null,
    emailSent: false
  };

  componentWillMount() {
    const resetContactFormHandler = () => {
      this.setState({
        email: "",
        message: "",
        name: "",
        emailIsValad: false
      });
    };
  }

  componentDidUpdate() {
    const emailIsValadHandler = email => {
      if (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        !this.state.emailIsValad
      ) {
        this.setState({ emailIsValad: true });
      }
      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        this.state.emailIsValad
      ) {
        this.setState({ emailIsValad: false });
      }
    };

    emailIsValadHandler(this.state.email);
  }

  nameChangeHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  messageChangeHandler = event => {
    event.preventDefault();

    this.setState({ message: event.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() =>
        this.setState({
          name: "",
          email: "",
          message: ""
        })
      )
      .catch(error => alert(error));

    e.preventDefault();
  };

  emailChangeHandler = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div className="section-contact">
        <div className="row">
          <div className="contact__block">
            <div className="contact__block-form">
              <ContactDetials
                nameChange={this.nameChangeHandler}
                name={this.state.name}
                emailChange={this.emailChangeHandler}
                messageChange={this.messageChangeHandler}
                submit={this.submitHandler}
                email={this.state.email}
                message={this.state.message}
                validEmail={this.emailIsValadHandler}
                valid={this.state.emailIsValad}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
