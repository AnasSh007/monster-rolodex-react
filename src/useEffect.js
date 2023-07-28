import React, { useEffect, useState } from "react";

function Random() {
  let [monsters, setMonster] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((data) => {
        setMonster(data);
        console.log(monsters);
      });
  }, []);

  // return <div>{monsters[0].name}</div>;
}

export default Random;
