import Note from "./note"
import './noteList.css'

const NotesList = () => {
    return <div className="notes-list">
        <Note/>
        <Note/>
        <Note/>
    </div>
}

export default NotesList;