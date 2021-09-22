export default function Spinner({ small }) {
  return (
    <div className={`container-fluid d-flex justify-content-center ${small? "my-1" : "my-5"}`}>
      <div
        className={`spinner-border ${small && "spinner-border-sm"}`}
        role="status"
      >
        <span className="sr-only visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
