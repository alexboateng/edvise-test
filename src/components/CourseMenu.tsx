import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { EditSquare } from "react-iconly";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.502 7C12.877 7 14.002 5.875 14.002 4.5C14.002 3.125 12.877 2 11.502 2C10.127 2 9.00195 3.125 9.00195 4.5C9.00195 5.875 10.127 7 11.502 7ZM11.502 9.5C10.127 9.5 9.00195 10.625 9.00195 12C9.00195 13.375 10.127 14.5 11.502 14.5C12.877 14.5 14.002 13.375 14.002 12C14.002 10.625 12.877 9.5 11.502 9.5ZM9.00195 19.5C9.00195 18.125 10.127 17 11.502 17C12.877 17 14.002 18.125 14.002 19.5C14.002 20.875 12.877 22 11.502 22C10.127 22 9.00195 20.875 9.00195 19.5Z"
        fill="#868D97"
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <div className={"relative"}>
      <Popover>
        <Popover.Button
          className="relative z-20 flex h-8 w-8 items-center justify-center focus:right-0 focus:outline-0"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="absolute z-20 w-[150px] top-full right-full mt-1 flex  flex-col rounded-md bg-white overflow-visible py-4 px-1 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
            >
              <Popover.Button className="block w-full flex gap-x-2 py-1 items-center px-2">
                {<EditSquare />} <span>Action 1</span>
              </Popover.Button>
              <Popover.Button className="block w-full flex gap-x-2 py-1 items-center px-2">
                {<EditSquare />} <span>Action 2</span>
              </Popover.Button>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  );
}

export default MobileNavigation;
