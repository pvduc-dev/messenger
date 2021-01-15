import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-12 h-12 flex self-center">
              <img
                src="https://res.cloudinary.com/pv-duc/image/upload/v1580583512/71251323_1608537582635003_6948501557230960640_n.jpg.jpg"
                alt="logo"
              />
            </div>
            <div className="ml-auto flex py-8">
              <Link to="/" className="mx-5 flex self-center">
                <span className="font-medium text-primary">Home</span>
              </Link>
              <Link to="/" className="mx-5 flex self-center">
                <span className="font-medium text-primary">Product</span>
              </Link>
              <Link to="/" className="mx-5 flex self-center">
                <span className="font-medium text-primary">About</span>
              </Link>
              <Link to="/" className="mx-5 flex self-center">
                <span className="font-medium text-primary">Contact</span>
              </Link>
              <Link
                to="/"
                className="block mx-5 px-8 py-2 border rounded-full hover:text-white border-primary hover:bg-primary text-primary"
              >
                <span className="font-bold">Sign in</span>
              </Link>
              <Link
                to="/"
                className="block mx-5 px-8 py-2 rounded-full border bg-secondary"
              >
                <span className="font-bold text-primary">Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="container">
          <div className="rounded-xxl bg-secondary">
            <div className="">
              <div className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
