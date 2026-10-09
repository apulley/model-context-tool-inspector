import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  html: false,
  linkify: false,
  breaks: true,
});

markdown.disable('image');

export function renderMarkdown(source) {
  return markdown.render(String(source));
}