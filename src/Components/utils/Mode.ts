const Mode = ({ setmode }: { setmode: Function }) => {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    e.matches ? setmode("dark") : setmode("light");
  });
};

export default Mode;
