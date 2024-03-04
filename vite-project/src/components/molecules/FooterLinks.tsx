import SmallTitle from "../atoms/SmallTitle";
import Subtitle from "../atoms/Subtitle";

interface Link {
  title: string;
  address: string;
}

interface FooterLinksProps {
  header: string;
  links: Link[];
}

const FooterLinks = ({ header, links }: FooterLinksProps) => {
  return (
    <div className="footer__link">
      <SmallTitle title={header} />
      {links.map(
        (link, index) => (
          <a href="" key={index}>
            <Subtitle title={link.title} />
          </a>
        )
        // a href link.address
      )}
    </div>
  );
};

export default FooterLinks;
