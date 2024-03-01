interface SubtitleProps {
  title: string;
}

const Subtitle = ({ title }: SubtitleProps) => {
  return (
    <p style={{ fontSize: "1.8rem", color: "#1e1e1e80", fontWeight: "medium" }}>
      {title}
    </p>
  );
};

export default Subtitle;
