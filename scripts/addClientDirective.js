#!/usr/bin/env node

import fs from 'fs';

function addClientDirective(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const clientDirective = '"use client";\n';

  if (content.startsWith(clientDirective)) return;

  fs.writeFileSync(filePath, `${clientDirective}${content}`, 'utf8');
}

['dist/client/index.js', 'dist/client/index.cjs'].forEach(addClientDirective);

process.exit(0);
