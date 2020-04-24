import bookRoutes from "./book/bookRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import versionRoutes from "./version/versionRoutes";
import searchRoutes from "./search/searchRoutes";
import tagRoutes from "./tag/tagRoutes"

export default [...versionRoutes, ...bookRoutes,...scriptureRoutes,...searchRoutes, ...tagRoutes];