import React ,{useState} from "react";
import "./styles.css" ;


const emojiDictionary={
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyance" /** add some more to show how the app now expands when there's new data */
};


const emojis = Object.keys(emojiDictionary);

export default function App(){
  const [emoji,setEmoji] = useState("");
  const [meaning,setMeaning]=useState("translation will apear here")

  function changeHandler(event){
    const inputEmoji=event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary){
      setMeaning(emojiDictionary[inputEmoji]);
    }else{
      setMeaning("failure to recognize this emoji");
    }
  }

  function emojiClickHandler(inputEmoji){
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (

    <div className="App">
          <h1>inside outttt!!!</h1>
          <input
            onChange={changeHandler}
            value={emoji}
            placeholder={"Search your emoji"}
            style={{
              padding: "1em",
              minWidth: "80%"
            }}
        />
      <h2> {emoji} </h2>{/** concept 1:JSX */}
      <h3>{meaning}</h3>{/** how much part is re-rendered */}

     {
       emojis.map((emoji) => ( 
         <span 
         onClick={() => emojiClickHandler(emoji)} 
         style={{ fontsize:"2rem",padding:"0.5rem",cursor:"pointer"}}
       >
       
       {" "}
       {emoji}{" "}
       </span>

       ))

     }
    </div>

  );
}



