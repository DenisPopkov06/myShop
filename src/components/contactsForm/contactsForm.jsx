import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setName,
  setEmail,
  setPhone,
  setMessage,
} from "../../redux/slices/contactSlice";
import style from "./contactsForm.module.css";
import Modal from "../../modals/modal";

const ContactsForm = () => {
  const name = useSelector((state) => state.contactReducer.name);
  const email = useSelector((state) => state.contactReducer.email);
  const phone = useSelector((state) => state.contactReducer.phone);
  const message = useSelector((state) => state.contactReducer.message);
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();

  const onSubmitBtn = (event) => {
    event.preventDefault();
    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setPhone(""));
    dispatch(setMessage(""));
    setIsOpen(true);
  };

  return (
    <>
      <div className={style.contacts_main_info_right_cart}>
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
            pattern="[0-9]*"
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>Ваше письмо доставлено!</p>
      </Modal>
    </>
  );
};

export default ContactsForm;
