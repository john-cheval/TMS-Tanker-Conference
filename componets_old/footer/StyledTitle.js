// components/StyledTitle.js
const StyledTitle = ({ children }) => {
  return (
    <h3
      className="text-[23px] font-medium mb-6 text-[var(--footer-blue)] capitalize"
      style={{
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        lineHeight: "134%",
        letterSpacing: "0%",
        fontWeight: "500",
      }}
    >
      {children}
    </h3>
  );
};

export default StyledTitle;
