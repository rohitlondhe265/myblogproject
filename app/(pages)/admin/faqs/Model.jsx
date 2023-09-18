"use client";

import React, { useState } from "react";
import AddNewFAQ from "./AddNewFAQ";

const Model = ({ id, question, answer }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCancelAction = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 text-white py-2 text-base bg-primary rounded"
        onClick={() => setShowModal(true)}
      >Update the FAQ</button>

      {showModal && (
        <AddNewFAQ
          id={id}
          question={question}
          answer={answer}
          onCancel={handleCancelAction}
        />
      )}
    </div>
  );
};

export default Model;
