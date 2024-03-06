import { useState,useEffect } from "react";
import "./style.css";

const TicTacsToe = () => {
    const [items, setItems] = useState(Array(9).fill(""));
  const [currMove, setCurrMove] = useState({id:null,player: "o" | "x"});
  const [winner, setWinner] = useState(null);
  const nextMoveHandle = (playId) => {
  
    if (items[playId] === "" && !winner) {
      if (currMove.id !== null) {
        if (currMove.player === "o") {
            setItems((pre) => {
                const newArray = [...pre];
                newArray[playId] = "x";
                return newArray;
              });
          setCurrMove({ id: playId, player: "x" });

        } else {
            setItems((pre) => {
                const newArray = [...pre];
                newArray[playId] = "o";
                return newArray;
              });
          setCurrMove({ id: playId, player: "o" });
        }
      } else  {
        console.log("first");
        setItems((pre) => {
            const newArray = [...pre];
            newArray[playId] = "o";
            return newArray;
          });
        setCurrMove({ id: playId, player: "o" });
        
      }
    }
    else{
        return;
    }

   
  };
  useEffect(() => {
    // Call a function to check for a winner whenever items are updated
    checkForWinner();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const checkForWinner = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      console.log( items[a]);
      if (
        items[a] !== "" &&
        items[a] &&
        items[a] ===(items[b] && items[b]) &&
        items[a] === (items[c] && items[c])
      ) {
     
     console.log([a, b, c]);
        setWinner(items[a]);
        return;
      }
    }
  };
  return (
    <div className="table">
      <div className="table-wrapper">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="table_cell"
            onClick={() => nextMoveHandle(index)}
          >
             {items[index] }
          </div>
        ))}
      </div>
      <h2>{winner && `winner is ${winner}`}</h2>
    </div>
  );
};
export default TicTacsToe;
