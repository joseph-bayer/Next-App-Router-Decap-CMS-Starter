// NOTE: This component should never be used in production. It's only for debugging purposes.

interface DebugHelperProps {
  data: any;
}

export default function DebugHelper({ data }: DebugHelperProps) {
  return (
    <pre className="my-2 overflow-x-auto rounded-xl bg-gray-200 p-4">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
