'use client';

import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-base-200">
      <FaExclamationTriangle className="text-6xl text-error" />
      <h1 className="text-6xl font-bold text-error mt-4">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      {/* <Image src="/404.gif" alt="Not Found" width={300} height={200} className="mt-4" /> */}
      <Link href="/">
        <button className="btn btn-primary mt-6">Go Home</button>
      </Link>
    </div>
  );
}
