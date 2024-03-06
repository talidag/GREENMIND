import "./Footer.scss";
import logo from "../../../assets/logo-footer.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import Icon from "../../molecules/Icon";
import Subtitle from "../../atoms/Subtitle";
import FooterLinks from "../../molecules/FooterLinks";

const Footer = () => {
  const slogan = "We help you find your dream plant";
  const copyright = "2023 all Right Reserved Term of use GREENMIND";
  const socials = [
    {
      img: facebook,
      alt: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      img: instagram,
      alt: "instagram",
      link: "https://www.instagram.com/",
    },
    {
      img: twitter,
      alt: "twitter",
      link: "https://twitter.com/",
    },
  ];

  const links = [
    {
      header: "Information",
      links: [
        {
          title: "About",
          address: "URL",
        },
        {
          title: "Product",
          address: "URL",
        },
        {
          title: "Blog",
          address: "URL",
        },
      ],
    },
    {
      header: "Company",
      links: [
        {
          title: "Community",
          address: "URL",
        },
        {
          title: "Career",
          address: "URL",
        },
        {
          title: "Our story",
          address: "URL",
        },
      ],
    },
    {
      header: "Contact",
      links: [
        {
          title: "Getting Started",
          address: "URL",
        },
        {
          title: "Pricing",
          address: "URL",
        },
        {
          title: "Resources",
          address: "URL",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__left">
          <img src={logo} alt="Greenmind logo" />
          <Subtitle title={slogan} />
          <div className="footer__socials">
            {socials.map((social, index) => (
              <Icon key={index} {...social} />
            ))}
          </div>
        </div>
        <div className="footer__right">
          {links.map((link, index) => (
            <FooterLinks key={index} {...link} />
          ))}
        </div>
      </div>
      <Subtitle title={copyright} />
    </footer>
  );
};

export default Footer;
