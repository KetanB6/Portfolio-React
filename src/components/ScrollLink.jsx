const ScrollLink = () => {
  const scrollWin = () => window.scrollTo({ top: 760, behavior: "smooth" });

  return (
    <a className="scroll_link" href="#" onClick={scrollWin}>
      Get to <font color="aqua">know</font> me better...
    </a>
  );
};

export default ScrollLink;
