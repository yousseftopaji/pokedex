function Pagination({ nextUrl, previousUrl, setUrl }) {
  return (
    <div>
      <button disabled={!previousUrl} onClick={() => setUrl(previousUrl)}>
        Previous
      </button>
      <button disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;