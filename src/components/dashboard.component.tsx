import Cart from "./cart.component";
import Card from "./card.component";
import SearchBox from "./search-box.component";
import UserInfo from "./user-info.component";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="bg-gray-600 lg:w-3/5">
        <div className="p-5">
          <SearchBox />
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="bg-gray-700 lg:w-2/5 flex flex-col items-center">
        <UserInfo />
        <Cart />
      </div>
    </div>
  );
};

export default Dashboard;
