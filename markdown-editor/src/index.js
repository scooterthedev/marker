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

    document.getElementById('save-btn').addEventListener('click', () => {
        const markdown = editor.getMarkdown();
        const blob = new Blob([markdown], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'document.smark';
        a.click();
    });

    document.getElementById('load-btn').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });

    document.getElementById('file-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                editor.setMarkdown(content);
            };
            reader.readAsText(file);
        }
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
        editor.clear();
        preview.update('');
    });
});