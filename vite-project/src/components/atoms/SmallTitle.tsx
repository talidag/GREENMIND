interface SmallTitleProps {
  title: string;
}

const SmallTitle = ({ title }: SmallTitleProps) => {
  return <h4 style={{ fontSize: "1.8rem" }}>{title}</h4>;
};

export default SmallTitle;
