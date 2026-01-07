export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-2">
      <h1 className="text-4xl font-bold">404</h1>
      <p style={{ color: 'var(--muted)' }}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
}