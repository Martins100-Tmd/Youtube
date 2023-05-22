/**
 *
 *
 * Images
 */
import ytb from "../assets/ytb.png";
import femProfile from "../assets/femProfile.png";
import femProfile_w from "../assets/femProfile(w).png";
import ytbprofile from "../assets/ytbprofile.jpg";
import vid from "../assets/vid.jpg";

//*********** assets/Recommended *****************
import Movie from "../assets/Recommended/Movies.jpg";
export { ytb, femProfile, femProfile_w, ytbprofile, vid, Movie };

/**
 *
 *
 * Component Directory
 */
// utils
export { default as ModeUtils } from "./utils/Mode";

//**********  Navbar  ************
export { default as NavBarComponent } from "./Navbars/NavBar";
export { default as Categories } from "./Navbars/Category";

//********** Sidebar *************

export { default as SideLeft } from "./Sidebars/SideLeft";
export { default as SideBottom } from "./Sidebars/SideBottom";

//********** Videos ***************
export { default as RecommendedVids } from "./Videos/Recommended";
export { default as VideoGridComponent } from "./Videos/VidGrid";

//*********** Effect **************
export { default as PromiseResponseComponent } from "./Effect/Effect.tsx";

//*********** VideoCard ***********
export { default as VideoCards } from "./Videocard/Vidcard.tsx";

/**
 *
 * Page Directory
 */
//************ Home *****************
export { default as Homepage } from "../Pages/Home";
//************ Search ***************
export { default as SearchBarPage } from "../Pages/Search";
