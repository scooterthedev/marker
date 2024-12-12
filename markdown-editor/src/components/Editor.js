class Editor {
    constructor() {
        this.state = {
            markdownText: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editorElement = document.createElement('div');
        this.editorElement.className = 'editor';
        this.textarea = document.createElement('textarea');
        this.textarea.placeholder = 'Write your markdown here...';
        this.textarea.addEventListener('input', this.handleInputChange);
        this.editorElement.appendChild(this.textarea);
    }

    handleInputChange(event) {
        this.state.markdownText = event.target.value;
        if (this.onInputChange) {
            this.onInputChange(this.state.markdownText);
        }
    }

    render() {
        return this.editorElement;
    }
}

export default Editor;