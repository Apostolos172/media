const FlexContainer = ({ children, className }) => {
  const flexContainer = "flex flex-row items-center";

  return <div className={`${flexContainer} ${className}`}>{children}</div>;
};

export default FlexContainer;
