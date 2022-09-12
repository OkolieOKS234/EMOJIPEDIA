import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojiCard(emojis) {
  return (
    <dl className="dictionary">
      <Entry
        key={emojis.id}
        emoji={emojis.emoji}
        name={emojis.name}
        meaning={emojis.meaning}
      />
    </dl>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia 💪</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
