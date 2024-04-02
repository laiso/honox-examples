import _ from "../islands/dummy"; // おまじない
import { createRoute } from "honox/factory";
import { NoteEditor } from "../components/note-editor";

export default createRoute((c) => {
  const note = {
    content: `# New Note Title`,
  };
  return c.render(
    <main class="mx-auto mt-10 max-w-xl space-y-10">
      <NoteEditor note={note} />
    </main>,
    { title: "Note Create" }
  );
});
