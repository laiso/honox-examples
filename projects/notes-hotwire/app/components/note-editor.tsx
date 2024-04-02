import { FC } from "hono/jsx";
import { css } from "hono/css";
import noteStyles from "../styles/note-preview.css?raw";
import { Note } from "../types";

export const NoteEditor: FC<{ note: Note }> = async ({ note }) => {
  const style = css`
    ${noteStyles}
  `;
  return (
    <div class="container mx-auto" data-controller="note">
      <form action={note.id ? `/note/${note.id}` : "/note"}>
        <div class="flex">
          <textarea
            class="editor w-1/2 p-4 border border-gray-300 rounded-l"
            name="input"
            data-note-target="editor"
            data-action="input->note#renderMarkdown"
          >
            {note.content}
          </textarea>
          <div class="preview w-1/2 p-4 bg-gray-100 rounded-r">
            <div class={style} data-note-target="preview"></div>
          </div>
        </div>
        <div class="my-4">
          <button
            type="submit"
            formmethod={note.id ? `put` : "post"}
            value="Save"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
