import { CSSProperties } from "react";

export default function TextInput(textModalProps: {
  id: string,
  disabled?: boolean,
  onInputChange: Function,
  data?: string,
  style?: CSSProperties
}) {
  return <>
    <div className="flex">
      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
      </span>
      <input type="text" value={textModalProps.data} onChange={e => textModalProps.onInputChange(e.target.value)} id={textModalProps.id} className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-purple-600 focus:border-purple-600 block flex-1 min-w-0 w-full text-sm p-2.5 disabled:bg-gray-300" style={textModalProps.style} disabled={textModalProps.disabled} placeholder="Steve" />
    </div>
  </>;
}
