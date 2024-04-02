import _ from "../../../islands/dummy"; // おまじない
import { createRoute } from "honox/factory";
import { NoteViewer } from "../../../components/note-viewer";

export const PUT = createRoute(async (c) => {
  const { input } = await c.req.parseBody<{ input: string }>();
  // TODO: dangerouslyHTMLをいい感じに取り除いてDBに保存しておく
  console.log(input);
  const id = c.req.param('id');
  return c.redirect(`/note/${id}`, 303);
});

export default createRoute(async (c) => {
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
      <NoteViewer note={note} />
    </main>,
    { title: "Note Detail" }
  );
});
