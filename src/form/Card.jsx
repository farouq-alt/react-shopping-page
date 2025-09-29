function Card(props) {
    return (
      <div className="card mb-3">
        <img
          src={props.flag}
          alt="flag"
          className="card-img-top"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Capitale : {props.capital} <br />
            Continent : {props.continent}
          </p>
        </div>
      </div>
    );
  }
  
  export default Card