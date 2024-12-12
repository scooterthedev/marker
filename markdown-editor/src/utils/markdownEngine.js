function convertMarkdown(markdown) {
    markdown = markdown.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    markdown = markdown.replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>');

    markdown = markdown.replace(/^\d+\. (.*)$/gm, '<ol><li>$1</li></ol>');
    markdown = markdown.replace(/<\/ol>\n<ol>/g, '');

    markdown = markdown.replace(/^\* (.*)$/gm, '<ul><li>$1</li></ul>');
    markdown = markdown.replace(/<\/ul>\n<ul>/g, '');

    markdown = markdown
        .replace(/###### (.*)/g, '<h6>$1</h6>')
        .replace(/##### (.*)/g, '<h5>$1</h5>')
        .replace(/#### (.*)/g, '<h4>$1</h4>')
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/# (.*)/g, '<h1>$1</h1>');

    markdown = markdown
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/~~(.*?)~~/g, '<del>$1</del>')
        .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/`(.*?)`/g, '<code>$1</code>');

    markdown = markdown.replace(/\n/g, '<br/>');

    return markdown;
}

export { convertMarkdown };