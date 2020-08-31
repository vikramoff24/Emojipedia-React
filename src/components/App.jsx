import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
