import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/components-search-box/search-box-renderer";
import CardList from "./components/components-card-list/card-list-renderer";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const getMonsters = async () => {
      const usersArray = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersJson = await usersArray.json();
      setMonsters(usersJson);
    };
    getMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().startsWith(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        type="search"
        className="search-box"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;

// {class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     this.getMonsters();
//   }

//   async getMonsters() {
//     const usersArray = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const usersJson = await usersArray.json();
//     this.setState(() => {
//       return { monsters: usersJson };
//     });
//   }

//   onSearchChange(event) {
//     this.setState(() => {
//       return { searchField: event.target.value };
//     });
//   }

//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().startsWith(this.state.searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           placeholder="Search monsters"
//           type="search"
//           className="search-box"
//           onChangeHandler={this.onSearchChange.bind(this)}
//         />
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

// export default App;
