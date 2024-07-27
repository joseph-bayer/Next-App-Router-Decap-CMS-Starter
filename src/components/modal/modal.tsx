"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: Readonly<React.ReactNode>;
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-offBlack/80" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative mx-4 max-w-2xl space-y-4 rounded-xl bg-offWhite p-12">
          {/* Close Button */}
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="absolute -right-8 -top-8"
          >
            <span className="sr-only">Close Modal</span>
            <XMarkIcon
              aria-hidden="true"
              className="h-8 w-8 stroke-2 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-100"
            />
          </button>

          {/* Content */}
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
