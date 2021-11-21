import { useState } from "react";
import Note from "./components/note";
import NotesList from "./components/noteList";
import {nanoid} from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    header: "Note1",
    text: "Congratulations! This is your first note",
    date: 11/19/2021
  },
  {
    id: nanoid(),
    header: "Note2",
    text: "Congratulations! This is your second note",
    date: 11/19/2021
  },
  {
    id: nanoid(),
    header: "Note3",
    text: "Congratulations! This is your third note",
    date: 11/19/2021
  },
]);
  return (
    <NotesList></NotesList>
  )
}

export default App;