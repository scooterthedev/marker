import Editor from './components/Editor.js';
import Preview from './components/Preview.js';

document.addEventListener('DOMContentLoaded', () => {
    const editor = new Editor();
    const preview = new Preview();

    const editorContainer = document.getElementById('editor');
    const previewContainer = document.getElementById('preview');

    editorContainer.appendChild(editor.render());
    previewContainer.appendChild(preview.render());

    editor.onInputChange = (markdown) => {
        preview.update(markdown);
    };
});