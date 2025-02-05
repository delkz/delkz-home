export const richChunks = {
  p: (chunks) => <p>{chunks}</p>,
  h2: (chunks) => <h2>{chunks}</h2>,
  strong: (chunks) => <strong>{chunks}</strong>,
  ul: (chunks) => <ul>{chunks}</ul>,
  li: (chunks) => <li>{chunks}</li>,
  section: (chunks) => <section>{chunks}</section>,
  a: (chunks, attrs) => <a {...attrs}>{chunks}</a>
}