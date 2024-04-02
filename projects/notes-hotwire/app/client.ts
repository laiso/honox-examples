import "@hotwired/turbo"
import { Application } from '@hotwired/stimulus';
import NoteController from './controllers/note_controller';

const application = Application.start();
application.register("note", NoteController);
