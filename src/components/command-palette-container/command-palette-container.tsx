import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CommandPaletteContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: Readonly<React.ReactNode>;
}

export default function CommandPaletteContainer({
  isOpen,
  setIsOpen,
  children,
}: CommandPaletteContainerProps) {
  return (
    <Dialog
      className="relative z-10"
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <DialogBackdrop className="fixed inset-0 bg-offBlack/80" />

      <div className="fixed inset-0 w-screen p-4 sm:p-6 md:p-20">
        <DialogPanel className="mx-auto max-w-xl">
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
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
