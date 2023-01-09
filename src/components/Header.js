import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/rent-list`}>Rent List</Link>
        </li>
        <li className="list-group-item">
          <Link to={`/create-rent`}>Create rent</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;