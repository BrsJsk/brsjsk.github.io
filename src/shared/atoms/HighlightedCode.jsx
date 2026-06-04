import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';

export const HighlightedCode = ({ children, className = '' }) => {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('typescript', typescript);

    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={className}>{children}</code>
    </pre>
  );
};
