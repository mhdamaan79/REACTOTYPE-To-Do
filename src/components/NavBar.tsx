import { Link, useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const todos̥Data = searchParams.get("todos");

  return (
    <nav className="container text-center gap-2">
      <Link to="/" className={todos̥Data === null ? "active" : ""}> 
        All
      </Link>
      <Link
        to="/?task=active"
        className={todos̥Data === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        to="/?task=completed"
        className={todos̥Data === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};
// active here means, underline or highlite current page heading
export default NavBar;
