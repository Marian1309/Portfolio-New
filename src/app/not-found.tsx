import type { FC } from 'react';

import Link from 'next/link';

import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound: FC = () => {
  return (
    <section className="min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-12">
        <div className="m-4 mb-4 rounded-md border bg-gray-700 px-6 py-24 shadow-md md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-8xl" color="#ffba00" />
          </div>

          <div className="text-center">
            <h1 className="mb-2 mt-4 text-3xl font-bold">Page Not Found</h1>

            <p className="mb-10 text-xl text-gray-300">
              The page you are looking for does not exist.
            </p>

            <Link
              className="rounded bg-accent px-6 py-4 font-bold text-white hover:bg-accent-hover"
              href="/"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>
    </section>
  );
};

export default NotFound;
