import bookRoutes from "./book/bookRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import versionRoutes from "./version/versionRoutes";
import searchRoutes from "./search/searchRoutes";

export default [...versionRoutes, ...bookRoutes, ...scriptureRoutes, ...searchRoutes];