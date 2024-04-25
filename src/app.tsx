import logo from "@/assets/logo-nlw-expert.svg";
import { NoteCard } from "@/components/note-card.tsx";
import { NewNoteCard } from "@/components/new-note-card.tsx";
import { useState } from "react";

interface NoteProps {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    setNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert" />

      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Busque em suas notas"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
