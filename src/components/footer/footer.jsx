import downloadIcons from "./icons/downloadIcons.png";
import arrow from "./icons/arrow.png";
import style from "./footer.module.css";

const Footer = () => {
  const support = [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];
  const account = [
    "My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
  ];
  const links = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

  return (
    <div className={style.footer_container}>
      <div>
        <h2>Exclusive</h2>
        <h3>Subscribe</h3>
        <p>Get 10% off your first order</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Ваша скидка применена");
          }}
        >
          <input placeholder="Enter your email" />
          <button>
            {" "}
            <img src={arrow} alt="arrow" />
          </button>
        </form>
      </div>
      <div>
        <h2>Support</h2>
        <ul>
          {support.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Account</h2>
        <ul>
          {account.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Quick Link</h2>
        <ul>
          {links.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>
        <img src={downloadIcons} alt="downloadIcons" />
      </div>
    </div>
  );
};

export default Footer;
