interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h4 style={{ fontSize: "3.2rem" }}>{title}</h4>;
};

export default Title;
