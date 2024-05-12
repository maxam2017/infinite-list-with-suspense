export function LoadJokeError({ reset }: { reset: () => void }) {
  return (
    <div className="text-sm text-center text-gray-400 py-4">
      Failed to load more jokes. Please
      <button
        onClick={reset}
        className="ml-1 underline cursor-pointer text-blue-600"
      >
        try again
      </button>
      .
    </div>
  );
}
