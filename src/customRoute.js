import { Routes, Route } from "react-router-dom";
import Details from './photoes/Details';
import Photo from './photoes/photo';
function CustomRoute() {

    return(
        <Routes>
      <Route path="/" element={<Photo />} />
      <Route path="/detail/:id" element={<Details />} />
    </Routes>
    );
}
export default CustomRoute;