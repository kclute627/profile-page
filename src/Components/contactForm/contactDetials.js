import React from "react";

const contactDetials = props => {
  return (
    <form className="form">
      <div className="u-margin-bottom-medium">
        <h3 className="heading-secondary">Let's Work Together</h3>
      </div>
      <div className="form__group">
        <input
          className="form__input"
          onChange={props.nameChange}
          type="text"
          value={props.name}
          placeholder="Name"
          name="name"
        />
        <label className="form__label">Name</label>
      </div>
      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email Address"
          value={props.email}
          onChange={props.emailChange}
          name="email"
        />
        <label className="form__label">Email Address</label>
      </div>
      <div className="form__group-text">
        <textarea
          className="form__input"
          value={props.message}
          placeholder="Message"
          onChange={props.messageChange}
          name="message"
        />
        <label className="form__label">Message</label>
      </div>
      <div className="btn__container-form">
        <button
          className="btn-form"
          type="submit"
          value="Send"
          disabled={!props.valid}
          onClick={props.submit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default contactDetials;
