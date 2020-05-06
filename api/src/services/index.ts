import bookRoutes from "./book/bookRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import versionRoutes from "./version/versionRoutes";
import searchRoutes from "./search/searchRoutes";
import tagRoutes from "./tag/tagRoutes"
import languageRoutes from "./language/languageRoutes"
import peopleRoutes from "./people/peopleRoutes"
import noteRoutes from "./note/noteRoutes"

let routes = [...versionRoutes, ...bookRoutes, ...scriptureRoutes, ...searchRoutes, ...tagRoutes, ...languageRoutes, ...peopleRoutes, ...noteRoutes];
export default routes;