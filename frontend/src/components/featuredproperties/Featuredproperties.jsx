import "./featuredproperties.css";
import useFetch from "../../Hooks/useFetch.jsx";
import ReactLoading from "react-loading";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/hotel?featured=true"
  );
  // console.log(data.slice(0,4));
  const Images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
  ];

  return (
    <div className="fp">
      {loading?( <ReactLoading
        type={"spinningBubbles"}
        color={"#FFC300"}
        height={100}
        width={100}
      />):data.map((hotel,i)=>{
        return(
          <div className="fpItem">
            <img src={Images[i]} alt="" className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <span className="fpCity">{hotel.city}</span>
            <span className="fpPrice">
              Starting from Rs. {hotel.cheapestPrice}
            </span>
            {hotel.rating && (
              <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>Exceptional</span>
              </div>
            )}
          </div>
        )
      })
      }
    </div>
  );
};

export default FeaturedProperties;
