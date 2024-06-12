export default function Navbar() {
  return (
    <nav className="navbar m-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/mega-summarizer">
          <h1 className="title is-4">Mega Summarizer</h1>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Language</a>

          <div className="navbar-dropdown">
            <a className="navbar-item">PT</a>
            <a className="navbar-item is-selected">EN</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
