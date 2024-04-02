import _ from "../../../islands/dummy"; // おまじない
import { createRoute } from "honox/factory";
import { NoteEditor } from "../../../components/note-editor";

export default createRoute((c) => {
  // TDOO: ここでDBからmarkdownを取得する
  // const note = userNotes.findById(c.req.param('id'));
  const note = {
    id: 1,
    content: `# Old Note
## Hello
`,
  };
  return c.render(
    <main class="mx-auto mt-10 max-w-xl space-y-10">
      <NoteEditor note={note} />
    </main>,
    { title: "Note Edit" }
  );
});
