export default function Label(labelProps: {
  id: string,
  children: string,
  required?: boolean
}) {

  return <>
    <label htmlFor={labelProps.id} className={"block mb-2 text-sm font-medium text-gray-900"}>
      <span>{labelProps.children}</span>
      <span className="text-red-500">{labelProps.required ? " *" : ""}</span>
    </label>
  </>;
}
