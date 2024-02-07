'use client';

import clsx from 'clsx';
import React from 'react';

type Color = (typeof colorList)[number];

export default function CreationsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <main>
      <section
        className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}
      >
        <h3>Blogs</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
              alt=''
            />
            <p>Zenn</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
              alt=''
            />
            <p>?</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
              alt=''
            />
            <p>?</p>
          </div>
        </div>
        <h3>Prototypes / PoF</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
              alt=''
            />
            <p>?</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
              alt=''
            />
            <p>?</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
              alt=''
            />
            <p>?</p>
          </div>
        </div>
        <h3>Games</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
              alt=''
            />
            <p>Trace of Gladius</p>
          </div>
        </div>
        <h3>Services</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
              alt=''
            />
            <p>WasedaTime</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const colorList = [
  'theme-blue',
  'theme-red',
  'theme-brown',
  'theme-green',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
