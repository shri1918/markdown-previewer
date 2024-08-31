import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

// Set the breaks option to true to interpret line breaks as <br>
marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Editor markdown={markdown} handleChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

const Editor = ({ markdown, handleChange }) => (
  <textarea
    id="editor"
    value={markdown}
    onChange={handleChange}
    className="editor"
  />
);

const Preview = ({ markdown }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    className="preview"
  />
);

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a link to [freeCodeCamp](https://www.freecodecamp.org)!

\`inline code\`

\`\`\`
// code block
function example() {
  return "This is a code block!";
}
\`\`\`

- Item 1
- Item 2
- Item 3

> Blockquote

**Bold text**

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

Here's a line break followed by another line.
Just like this.
`;

export default App;
