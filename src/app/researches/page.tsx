'use client';

import clsx from 'clsx';
import React from 'react';

type Color = (typeof colorList)[number];

export default function ResearchesPage() {
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
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
              alt=''
            />
            <p>ムキムキ</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
              alt=''
            />
            <p>太鼓</p>
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
              alt=''
            />
            <p>協力プレイ</p>
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
