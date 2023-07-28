import React, { useState } from "react";
import Card2 from "./Card2";
import Header from "./Header";
import { MonsterContext } from "./context/monsterContext";
import { useContext, useEffect } from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchText: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((jsonData) => {
//         return jsonData.json();
//       })
//       .then((data) => {
//         this.setState({ monsters: data });
//       });
//   }
//   render() {
//     let { monsters, searchText } = this.state;
//     let filteredMonsters = monsters?.filter((monster) =>
//       monster.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     let handleSearchText = (value) => {
//       this.setState({ searchText: value });
//     };
//     return (
//       <div className="App">
//         <Header searchTextChange={handleSearchText} />
//         <div>
//           {/* <input
//             className="inputStyles"
//             type="text"
//             placeholder="Search Here"
//             onChange={(event) => {
//               this.setState({ searchText: event.target.value });
//             }}
//           /> */}
//         </div>
//         <div className="styles_card__1-dAI">
//           {filteredMonsters.map((element) => (
//             <Card2 key={element.id} monster={element} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export default function App() {
  let [monstersState, setMonstersState] = useState({
    monsters: [],
    searchText: "",
  });

  let { currentMonster, setCurrentMonster } = useContext(MonsterContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((data) => {
        setMonstersState({ monsters: data });
      });
  }, []);

  function saveMonster(id) {
    setCurrentMonster(id);
  }

  useEffect(() => {
    console.log("current monster in context = ", currentMonster);
  }, [currentMonster]);

  return (
    <div className="App">
      <Header searchTextChange={() => {}} />
      <div className="styles_card__1-dAI">
        {monstersState.monsters.map((element) => (
          <div
            onClick={() => {
              saveMonster(element.id);
            }}
          >
            <Card2 key={element.id} monster={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
