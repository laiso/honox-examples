import { createRoute } from "honox/factory";
import { NoteEditor } from "../../components/note-editor";

export const POST = createRoute(async (c) => {
  const { input } = await c.req.parseBody<{ input: string }>();
  // TODO: dangerouslyHTMLをいい感じに取り除いてDBに保存しておく
  console.log(input);
  const id = 1;
  return c.redirect(`/note/${id}`, 303);
});