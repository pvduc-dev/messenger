import React from 'react';
import { openFileDialog } from '@helpers/file';

function App() {
  async function handleClick() {
    const files: FileList = await openFileDialog({
      accept: 'image/*',
      multiple: true,
    });
  }

  return (
    <>
      <h1 onClick={handleClick}>{process.env.NODE_ENV}</h1>
    </>
  );
}

export default App;
