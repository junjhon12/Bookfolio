import Categories from "../components/Categories";
import GoogleBooks from "../components/GoogleBooks";
import Searchbar from "../components/Searchbar";

export default function Search({api_url}) {
  return (
    <div style={{paddingTop:'20px'}}>
      <Searchbar>Searching title...</Searchbar>
      <Categories />
      <div className="flex">
        <GoogleBooks api_url={api_url}/>
      </div>
    </div>
  );
}
