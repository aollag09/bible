import bookRoutes from "./book/bookRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import versionRoutes from "./version/versionRoutes";
import searchRoutes from "./search/searchRoutes";
import tagRoutes from "./tag/tagRoutes"
import languageRoutes from "./language/languageRoutes"
import peopleRoutes from "./people/peopleRoutes"

let routes = [...versionRoutes, ...bookRoutes, ...scriptureRoutes, ...searchRoutes, ...tagRoutes, ...languageRoutes, ...peopleRoutes];
export default routes;