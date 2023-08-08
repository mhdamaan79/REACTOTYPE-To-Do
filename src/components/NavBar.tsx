import { Link, useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("task");

  return (
    <nav className="container text-center gap-2">
      <Link to="/" className={todosData === null ? "active" : ""}>
        All
      </Link>
      <Link
        to="/?task=active"
        className={todosData === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        to="/?task=completed"
        className={todosData === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};
// active here means, underline or highlite current page heading
export default NavBar;
