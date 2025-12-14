import phones from "../img/contacts-phone.png";
import mail from "../img/contacts-mail.png";
import "../css/contacts.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPhone,
  setMessage,
} from "../redux/slices/contactSlice";

const Contacts = () => {
  const name = useSelector((state) => state.contactReducer.name);
  const email = useSelector((state) => state.contactReducer.email);
  const phone = useSelector((state) => state.contactReducer.phone);
  const message = useSelector((state) => state.contactReducer.message);
  const dispatch = useDispatch();

  const onSubmitBtn = (event) => {
    event.preventDefault()
    dispatch(setName(""))
    dispatch(setEmail(""))
    dispatch(setPhone(""))
    dispatch(setMessage(""))
  }

  return (
    <div className="contacts-container">
      <div className="pages-path">
        <a className="home-path-link" href="#">
          Home /{" "}
        </a>
        <a className="contacts-path-link" href="#">
          {" "}
          Contact
        </a>
      </div>

      <div className="contacts_main-info">
        <div className="contacts_main-info_left-cart">
          <div className="first-contact-part">
            <div className="contacts_main-info_left-cart_head">
              <img src={phones} alt="phone" />
              <div className="picture-text">Call To Us</div>
            </div>
            <div className="info-contact">
              We are available 24/7, 7 days a week.
            </div>
            <div className="info-contact">Phone: +8801611112222</div>
          </div>
          <div className="second-contact-part">
            <div className="contacts_main-info_left-cart_head">
              <img src={mail} alt="mail" />
              <div className="picture-text">Write To US</div>
            </div>
            <div className="info-contact">
              Fill out our form and we will contact you within 24 hours.
            </div>
            <div className="info-contact">Emails: customer@exclusive.com</div>
            <div className="info-contact">Emails: support@exclusive.com</div>
          </div>
        </div>
        <div className="contacts_main-info_right-cart">
          <form onSubmit={(e) => onSubmitBtn(e)} id="myForm">
            <input
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
            <input
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              type="number"
              placeholder="Your Phone"
              required
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
            />
            <textarea
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => dispatch(setMessage(e.target.value))}
            />
          </form>
          <button form="myForm" type="submit">
            Send Message
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contacts;
