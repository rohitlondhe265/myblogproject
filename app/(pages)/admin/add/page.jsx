import React from 'react';
import NewPostForm from './NewPostForm';

export default function page () {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <NewPostForm heading="Create a New Post" />
    </div>
  );
}