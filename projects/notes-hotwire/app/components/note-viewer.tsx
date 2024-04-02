import { FC } from "hono/jsx";
import { css } from "hono/css";
import noteStyles from "../styles/note-preview.css?raw";
import { Note } from "../types";

export const NoteViewer: FC<{ note: Note }> = async ({ note }) => {
  const style = css`
    ${noteStyles}
  `;
  return (
    <div class="container mx-auto" data-controller="note">
      <div class="preview p-4 bg-gray-100 rounded-r">
        <input type="hidden" data-note-target="editor" value={note.content} />
        <div class={style} data-note-target="preview" />
      </div>
      <div class="my-4">
        <a href={`/note/${note.id}/edit`}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </a>
      </div>
    </div>
  );
};
