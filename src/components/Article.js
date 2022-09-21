function Article({ title, date = "January 1, 1970", preview, emoji, minutes }) {
  return (
    <main>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </main>
  );
}
export default Article;