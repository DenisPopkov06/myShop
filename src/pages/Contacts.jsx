import { useDispatch } from "react-redux";
import { setActive } from "../redux/slices/headerSlice";
import { NavLink } from "react-router-dom";
import ContactsForm from "../components/contactsForm/contactsForm";
import phones from "../assets/img/contacts-phone.png";
import mail from "../assets/img/contacts-mail.png";
import "../css/contacts.css";


const Contacts = () => {

  const dispatch = useDispatch();
  dispatch(setActive("Contact"))

  return (
    <div className="contacts-container">
      <div className="pages-path">
        <NavLink
          className="home-path-link"
          to={"/"}
          onClick={() => dispatch(setActive("Home"))}
        >
          Home /{" "}
        </NavLink>
        <NavLink to={"/contacts"}>
          {" "}
          Contact
        </NavLink>
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
        <ContactsForm />
      </div>
    </div>
  );
};

export default Contacts;
