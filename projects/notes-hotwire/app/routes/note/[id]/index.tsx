import _ from "../../../islands/dummy"; // おまじない
import { createRoute } from "honox/factory";
import markdownEditorStyle from "../../../styles/note-preview.css?raw";
import { css } from "hono/css";
import { NoteViewer } from "../../../components/note-viewer";

export default createRoute(async (c) => {
  // TDOO: ここでDBからmarkdownを取得する
  // const note = userNotes.findById(c.req.param('id'));
  const note = {
    id: 1,
    content: `# Title <img src="a" onerror="alert(1)">`,
  };
  const style = css`
    ${markdownEditorStyle}
  `;
  return c.render(
    <main class="mx-auto mt-10 max-w-xl space-y-10">
      <NoteViewer note={note} />
    </main>,
    { title: "Note Detail" }
  );
});
