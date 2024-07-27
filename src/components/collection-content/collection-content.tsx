"use client";

import Markdown from "markdown-to-jsx";
import dynamic from "next/dynamic";
import { useState } from "react";
import DebugHelper from "../debug-helper/debug-helper";
const Modal = dynamic(() => import("../modal/modal"));

interface CollectionContentProps {
  collectionItemData: any; // TODO:
}

export default function CollectionContent({
  collectionItemData,
}: CollectionContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {!!isModalOpen && (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className="flex flex-col gap-4">
            <span>JSON Data for this collection item:</span>
            <DebugHelper data={collectionItemData} />
          </div>
        </Modal>
      )}

      <div className="flex flex-col gap-8">
        {/* Modal Example */}
        <div className="flex flex-col gap-4">
          <span>Click below to see the json data for this collection item</span>
          <button
            className="w-fit rounded-md bg-shenron px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-shenron"
            onClick={() => setIsModalOpen(true)}
          >
            See Data Structure
          </button>
        </div>

        <Markdown>{collectionItemData?.content}</Markdown>
      </div>
    </div>
  );
}
