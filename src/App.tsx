import React, { FunctionComponent, Suspense } from 'react';
import { openFileDialog } from '@/helpers/file';

const App: FunctionComponent = () => {
  async function handleAttachmentClick (): Promise<void> {
    const files: FileList = await openFileDialog({
      accept: 'image/*',
      multiple: true,
    })
  }
  return (
    <>
      <div className="">test</div>
    </>
  );
};

export default App;
