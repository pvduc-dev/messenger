import React, { FunctionComponent } from 'react';
import { openFileDialog, saveFile } from '@/helpers/file';

const App: FunctionComponent = () => {
  async function handleClick() {
    const files: FileList = await openFileDialog({
      accept: 'image/*',
      multiple: true,
    });
    saveFile(files.item(0), 'test')
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {process.env.NODE_ENV}
      </button>
    </>
  );
};

export default App;
