"use client";

import React, { useState } from "react";
import AddNewCat from "./AddNewCat";
import { NewspaperIcon } from "@heroicons/react/24/solid";

const Model = ({ heading, btnText, id, title, description, slug, metaKeywords }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCancelAction = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 text-white py-2 text-base bg-primary rounded"
        onClick={() => setShowModal(true)}
      >
        {btnText} <NewspaperIcon className="inline-flex w-6 h-6 text-white" />
      </button>

      {showModal && (
        <AddNewCat
          heading={heading}
          id={id}
          title={title}
          description={description}
          slug={slug}
          metaKeywords={metaKeywords}
          onCancel={handleCancelAction}
        />
      )}
    </div>
  );
};

export default Model;
