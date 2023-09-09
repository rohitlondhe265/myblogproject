"use client";

import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const MyEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  // Load saved content when the component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  // Event handler for TinyMCE's onChange event
  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
    // Save the current content to local storage
    localStorage.setItem("editorContent", content);
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <Editor
        apiKey="YOUR_API_KEY" // Replace with your TinyMCE API key or use the no-api-key version
        initialValue={editorContent}
        value={editorContent}
        onEditorChange={handleEditorChange}
        init={{
          height: 400,
          menubar: false,
        }}
      />
    </div>
  );
};

export default MyEditor;
