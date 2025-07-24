'use client';

export default function Button({ as: As = 'button', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const primary =
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  return (
    <As className={`${base} ${primary} ${className}`} {...props}>
      {children}
    </As>
  );
}
