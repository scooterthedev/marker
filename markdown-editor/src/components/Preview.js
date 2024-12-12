import { convertMarkdown } from '../utils/markdownEngine.js';

class Preview {
    constructor() {
        this.previewElement = document.createElement('div');
        this.previewElement.className = 'preview';
    }

    update(markdownText) {
        const htmlContent = convertMarkdown(markdownText);
        this.previewElement.innerHTML = htmlContent;
    }

    render() {
        return this.previewElement;
    }
}

export default Preview;