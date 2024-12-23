export default function ProductListing({ name }) {
  return (
    <div>
      <h1>{name || "Name"}</h1>
      <div></div>
    </div>
  );
}
