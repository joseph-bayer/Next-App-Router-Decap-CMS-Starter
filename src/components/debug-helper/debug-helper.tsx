// NOTE: This component should never be used in production. It's only for debugging purposes.

interface DebugHelperProps {
  data: any;
}

export default function DebugHelper({ data }: DebugHelperProps) {
  return (
    <pre className="my-2 max-w-xl overflow-auto border-4 border-black bg-charcoal p-4 font-bold text-green-400">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
