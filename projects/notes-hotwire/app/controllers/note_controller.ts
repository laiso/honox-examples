import { Controller } from '@hotwired/stimulus';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default class extends Controller {
    static targets = ["editor", "preview"];
    declare readonly editorTarget: HTMLTextAreaElement;
    declare readonly previewTarget: HTMLElement;

    connect() {
        this.renderMarkdown();
    }

    async renderMarkdown() {
        const markdown = this.editorTarget.value;
        const html = await marked(markdown);
        this.previewTarget.innerHTML = DOMPurify.sanitize(html);
    }
}