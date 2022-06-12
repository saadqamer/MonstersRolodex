import "./search-box-styles.css";

const SearchBox = ({ placeholder, type, className, onChangeHandler }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
