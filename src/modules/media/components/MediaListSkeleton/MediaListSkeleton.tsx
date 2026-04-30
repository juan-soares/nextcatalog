export default function MediaListSkeleton() {
  return (
    <div>
      {Array.from({ length: 8 }).map(() => (
        <div>
          {/* imagem */}
          <div
            style={{ width: "150px", height: "220px", background: "#ccc" }}
          />

          {/* título */}
          <div
            style={{
              width: "120px",
              height: "16px",
              background: "#ccc",
              marginTop: "8px",
            }}
          />

          {/* info */}
          <div
            style={{
              width: "80px",
              height: "12px",
              background: "#ddd",
              marginTop: "4px",
            }}
          />
        </div>
      ))}
    </div>
  );
}
