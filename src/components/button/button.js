'use client';

export default function Button({ children, onClick, type = 'button', loading = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      style={{
        background: '#ff7a18',
        color: '#fff',
        border: 'none',
        padding: '12px 20px',
        borderRadius: 10,
        cursor: loading ? 'not-allowed' : 'pointer',
        fontWeight: 600,
        opacity: loading ? 0.7 : 1,
      }}>
      {loading ? 'Please wait...' : children}
    </button>
  );
}
