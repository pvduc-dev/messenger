import React, { FunctionComponent, useState, useEffect } from 'react';
import { BehaviorSubject, Subject, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const usernameSubject$ = new BehaviorSubject('');
const passwordSubject$ = new BehaviorSubject('');
const submitSubject$ = new Subject();
const uploadingSubscriber$ = new Subscriber((next) => {
  console.log(next);
});

const Login: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const subscription = usernameSubject$.subscribe((next) => {
      setEmail(next);
    });
    return () => {
      subscription.unsubscribe();
    };
  });

  useEffect(() => {
    const subscription = passwordSubject$.subscribe((next) => {
      setPassword(next);
    });
    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const subscription = submitSubject$
      .pipe(
        switchMap(() =>
          ajax({
            method: 'POST',
            url: '/api/auth/login',
            progressSubscriber: uploadingSubscriber$,
            body: {
              username: usernameSubject$.value,
              password: usernameSubject$.value,
            },
          }),
        ),
      )
      .subscribe((next) => {
        console.log(next);
      });
    return () => {
      subscription.unsubscribe();
    };
  });

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="flex-none w-1/3 h-full">
          <div className="mt-24">
            <img
              src="https://res.cloudinary.com/pv-duc/image/upload/c_scale,h_64,w_64/v1600362173/logo.svg"
              alt="logo"
              className="mx-auto"
            />
          </div>
          <form>
            <div className="mt-8 text-center">
              <span className="font-bold text-2xl">Sign in</span>
            </div>
            <div className="mt-8 text-center">
              <input
                value={email}
                type="text"
                placeholder="Email or Phone"
                className="rounded-lg w-96 py-3 px-6 text-gray-700 leading-tight border outline-none focus:border-indigo-600"
                onChange={($event) => {
                  usernameSubject$.next($event.target.value);
                }}
              />
            </div>
            <div className="mt-6 text-center">
              <input
                value={password}
                type="password"
                placeholder="Password"
                className="rounded-lg w-96 py-3 px-6 text-gray-700 leading-tight border outline-none focus:border-indigo-600"
                onChange={($event) => {
                  passwordSubject$.next($event.target.value);
                }}
              />
            </div>
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="bg-indigo-600 rounded-md w-96 py-3 px-6 text-gray-700 leading-tight focus:outline-none"
                onClick={($event) => {
                  $event.preventDefault();
                  submitSubject$.next();
                }}
              >
                <span className="text-white font-medium">Login</span>
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                type="button"
                className="bg-red-500 rounded-md w-96 py-3 px-6 text-gray-700 leading-tight focus:outline-none"
              >
                <span className="text-white font-medium">
                  Sign in with Google
                </span>
              </button>
            </div>
          </form>
        </div>
        <div
          className="flex-1 h-full bg-cover pt-32 pl-48"
          style={{
            backgroundImage:
              'url(\'https://res.cloudinary.com/pv-duc/image/upload/v1602878336/Authentication-rafiki.svg\')',
          }}
        >
          <div className="text-white text-5xl font-medium select-none">
            Connect with friends
          </div>
          <div className="text-white text-5xl font-medium select-none">
            and around you
          </div>
          <div className="text-white text-5xl font-medium select-none">
            on Messenger
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
