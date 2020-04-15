import bookRoutes from "./book/bookRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import versionRoutes from "./version/versionRoutes";

export default [...versionRoutes, ...bookRoutes, ...scriptureRoutes];