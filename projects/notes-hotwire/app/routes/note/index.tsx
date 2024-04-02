import { createRoute } from "honox/factory";
import { NoteEditor } from "../../components/note-editor";

export const POST = createRoute(async (c) => {
  const { input } = await c.req.parseBody<{ input: string }>();
  // TODO: dangerouslyHTMLをいい感じに取り除いてDBに保存しておく
  console.log(input);
  const id = 1;
  return c.redirect(`/note/${id}`);
});

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
