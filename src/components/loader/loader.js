export default function Loader() {
  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          width: 32,
          height: 32,
          border: '4px solid #ffe3d1',
          borderTop: '4px solid #ff7a18',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
