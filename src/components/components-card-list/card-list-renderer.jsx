import "./components-card-list-styles.css";
import CardContainer from "../components-card-container/card-container-renderer";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <CardContainer name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
};

export default CardList;
