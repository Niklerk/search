export const SearchCard = ({ title, snippet, url, displayUrl, engine }) => {
  return (
    <div className="card ms-3 mw-75 animate__animated animate__fadeInLeft">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{snippet}</p>
            <p className="card-text">
              <small className="text-muted">{engine}</small>
            </p>
            <a className="card-link" href={url}>
              {displayUrl}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
