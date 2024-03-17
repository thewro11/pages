import { ReactElement } from "react";

export default function Helper(helperProps: {
  children?: ReactElement | string
}) {
  return <>
    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{helperProps.children}</p>
  </>;
}
