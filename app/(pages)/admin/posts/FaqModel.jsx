"use client";

import { useState } from "react";
import AddNewFAQ from "./AddNewFAQ";

export default function FaqModel({ postId }) {
  const [showModal, setShowModal] = useState(false);

  const handleCancelAction = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="text-primary"
        onClick={() => setShowModal(true)}
      >
        Add FAQ
      </button>

      {showModal && <AddNewFAQ id={postId} onCancel={handleCancelAction} />}
    </div>
  );
}
