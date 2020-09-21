import React, { FunctionComponent, useState } from 'react';

import {
  Image,
  Mic,
  Paperclip,
  Settings,
  Smile,
  ThumbsUp,
} from 'react-feather';
import { fileToDataURL, openFileDialog } from '@/helpers/file';

const Home: FunctionComponent = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  async function handleFileClick(): Promise<void> {
    const files: FileList = await openFileDialog({
      multiple: true,
      accept: 'image/*',
    });
    setImageUrl(await fileToDataURL(files.item(0) as File));
  }

  return (
    <>
      <div className="fixed h-20 w-full flex flex-none bg-white items-center border-b px-10">
        <img
          src="https://res.cloudinary.com/pv-duc/image/upload/v1600362173/logo.svg"
          alt="logo"
          title="Messenger"
          className="w-10 h-10"
        />
        <Settings
          stroke="#667EEA"
          strokeWidth={2}
          className="ml-auto cursor-pointer"
        />
        <img
          src="https://res.cloudinary.com/pv-duc/image/upload/v1580583512/71251323_1608537582635003_6948501557230960640_n.jpg.jpg"
          alt="avatar"
          className="w-10 h-10 ml-6"
        />
      </div>
      <div className="flex h-screen pt-20 flex-col">
        <div className="h-full flex">
          <div className="xxl:w-1/5 md:w-64 border-r" />
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <img src={imageUrl} alt="image" />
            </div>
            <div className="h-16 flex items-center border-t px-4">
              <Mic
                width={24}
                height={24}
                stroke="#667EEA"
                strokeWidth={2}
                className="mx-2 cursor-pointer flex-none"
              />
              <Image
                width={24}
                height={24}
                stroke="#667EEA"
                strokeWidth={2}
                className="mx-2 cursor-pointer flex-none"
              />
              <Paperclip
                width={28}
                height={24}
                stroke="#667EEA"
                strokeWidth={2}
                className="mx-2 cursor-pointer flex-none"
                onClick={handleFileClick}
              />
              <input
                type="text"
                placeholder="Type something here..."
                className="bg-gray-100 rounded-lg w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none mx-4"
              />
              <Smile
                width={24}
                height={24}
                stroke="#667EEA"
                strokeWidth={2}
                className="mx-2 cursor-pointer flex-none"
              />
              <ThumbsUp
                width={24}
                height={24}
                stroke="#667EEA"
                strokeWidth={2}
                className="mx-2 cursor-pointer flex-none"
              />
            </div>
          </div>
          <div className="xl:w-1/5 md:w-64 border-l" />
        </div>
      </div>
    </>
  );
};

export default Home;
