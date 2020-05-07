import bookRoutes from "./book/bookRoutes";
import languageRoutes from "./language/languageRoutes";
import noteRoutes from "./note/noteRoutes";
import peopleRoutes from "./people/peopleRoutes";
import readRoutes from "./read/readRoutes";
import scriptureRoutes from "./scriptures/scriptureRoutes";
import searchRoutes from "./search/searchRoutes";
import tagRoutes from "./tag/tagRoutes";
import versionRoutes from "./version/versionRoutes";

let routes = [...versionRoutes, ...bookRoutes, ...scriptureRoutes, ...searchRoutes, ...tagRoutes, ...languageRoutes, ...peopleRoutes, ...noteRoutes, ...readRoutes];
export default routes;