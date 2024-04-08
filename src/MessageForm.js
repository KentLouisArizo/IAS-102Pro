import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './globalStyles.css'; // Import global styles

const MessageForm = () => {
  const form = useRef();
  const navigate = useNavigate(); // Get navigate function

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8y3w216', 'template_71y7611', form.current, 'EoppY754MKIPRuKo3')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset(); // Reset the form after submission
      }, (error) => {
        console.error(error.text);
      });
  };

  const handleGoBack = () => {
    navigate(-1); // Go back when the button is clicked
  };

  return (
    <div className="form-container"> {/* Apply global style */}
      <h2>Message Admin</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group"> {/* Input group for icon and input */}
          <label><FontAwesomeIcon icon={faUser} /> Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="input-group"> {/* Input group for icon and input */}
          <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="input-group"> {/* Input group for icon and input */}
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <input type="submit" value="Send" />
        <button onClick={handleGoBack}>Back</button> {/* Add back button */}
      </form>
    </div>
  );
};

export default MessageForm;
