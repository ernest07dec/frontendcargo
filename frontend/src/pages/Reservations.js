import {
  FaBuilding,
  FaSearch,
  FaTimesCircle,
  FaFilter,
  FaUsers,
  FaTachometerAlt,
  FaCogs,
  FaCarAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCArd";
import { useEffect } from "react";

import ford from "../assets/cartype/family/Ford-Ecosport-cars.png";
import foton from "../assets/cartype/family/foton-cars.png";
import nissan from "../assets/cartype/family/family cars-BMW X3_0.jpg";

import luxury from "../assets/catergories/luxury-mercedez-benz.png";

export const Reservations = () => {
  const navigate = useNavigate();
  const [isCarSpecsOpen, setCarSpecsOpen] = useState(false);
  const [isCarCategoriesOpen, setCarCategoriesOpen] = useState(false);
  const [isTransmissionOpen, setTransmissionOpen] = useState(false);
  const [selectedCarSpecs, setSelectedCarSpecs] = useState([]);
  const [selectedCarCategories, setSelectedCarCategories] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [carFilter, setCarFilter] = useState([]);

  const [page, setPage] = useState(1);
  const path = window.location.search.split("&");
  const location = path[0].split("=")[1];
  const pickUpDate = path[1].split("=")[1];
  const pickUpTime = path[2].split("=")[1];
  const returnDate = path[3].split("=")[1];
  const returnTime = path[4].split("=")[1];
  const carType = path[5].split("=")[1];
  const carSpecsOptions = [
    "Compact",
    "SUV",
    "Sedan",
    "Convertible",
    "Electric",
    "Luxury",
  ];
  const carCategoriesOptions = [
    "Luxury",
    "Business",
    "Bridal",
    "Pick-up",
    "Travel",
    "Casual",
  ];
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/reservation/retrieveAll";
      const method = "GET";
      const header = {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
      };
      try {
        const response = await fetch(url, {
          method,
          headers: header,
        });
        const data = await response.json();
        const filterReservation = await data
          .filter((el) => {
            return (
              Date.parse(el.datetimestart) > Date.parse(pickUpDate) &&
              Date.parse(el.datetimefinish) < Date.parse(returnDate)
            );
          })
          .map((el) => {
            return el.carid;
          });
        const fetchCarData = async (filter) => {
          const url = "http://localhost:8000/car/retrieveAll";
          const method = "GET";
          const header = {
            "Content-Type": "application/json",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
          };
          try {
            const response = await fetch(url, {
              method,
              headers: header,
            });
            const data = await response.json();
            setCarFilter(
              data
                .filter((el) => {
                  return el.cartypename === carType && !filter.includes(el._id);
                })
                .splice(0 * page, 12 * page)
            );
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchCarData(filterReservation);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const transmissionOptions = ["Automatic", "Manual"];
  const [searchPickUpDate, setSearchPickUpDate] = useState("");
  const [searchReturnDate, setSearchReturnDate] = useState("");
  const [Searchlocation, setSearchLocation] = useState("");
  const [SearchcarType, setSearchCarType] = useState("");

  const handlePickUpDate = (e) => {
    setSearchPickUpDate(e.target.value);
  };
  const handleReturnDate = (e) => {
    setSearchReturnDate(e.target.value);
  };
  const handleLocation = (e) => {
    setSearchLocation(e.target.value);
  };
  const handleCartype = (e) => {
    setSearchCarType(e.target.value);
  };
  const handleSubmit = (e) => {
    if (searchPickUpDate === "" || searchReturnDate === "") {
      e.preventDefault();
      alert("Please input Date");
    } else if (
      Date.now() > Date.parse(searchPickUpDate) ||
      Date.now() > Date.parse(searchReturnDate) ||
      Date.parse(searchPickUpDate) > Date.parse(searchReturnDate)
    ) {
      e.preventDefault();
      alert(
        "Invalid date, Please check if you put the dates correctly, You can not book for the date today"
      );
    } else {
    }
  };

  const handleCarSpecsToggleDropdown = (e) => {
    e.preventDefault();
    setCarSpecsOpen(!isCarSpecsOpen);
  };

  const handleCarCategoriesToggleDropdown = (e) => {
    e.preventDefault();
    setCarCategoriesOpen(!isCarCategoriesOpen);
  };

  const handleTransmissionToggleDropdown = (e) => {
    e.preventDefault();
    setTransmissionOpen(!isTransmissionOpen);
  };

  const handleCarSpecsChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCarSpecs((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCarSpecs((prevSelected) =>
        prevSelected.filter((spec) => spec !== value)
      );
    }
  };

  const handleCarCategoriesChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCarCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCarCategories((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
  };

  const handleTransmissionChange = (event) => {
    const { value } = event.target;
    setSelectedTransmission(value);
  };

  const handleRentNow = () => {
    navigate("/cardetails");
  };

  return (
    <div>
      <div className={window.location.search ? "" : "hidden"}>
        <div className="bg-shade py-40">
          <div
            className="mx-auto md:w-11/12  rounded-lg bg-cyan-600 z-40 relative bottom-16 sm:bottom-10 px-2 lg:px-5 xl:px-5 py-5 mb-5"
            id="filter"
          >
            <form action="/reservation">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
                {/* Pick-up Branch  */}
                <div className="flex justify-center items-center rounded-lg bg-white py-2 col-span-2 lg:col-span-1">
                  <div className="relative ">
                    <select
                      className="rounded-lg pl-8 focus:ring-0 border-none"
                      id="location"
                      name="location"
                      placeholder="Pick-up Branch"
                      onChange={(e) => handleLocation(e)}
                    >
                      <option disabled value="Pick-up Branch">
                        Branch
                      </option>
                      <option value="Manila">Manila</option>
                      <option value="Pasay">Pasay</option>
                      <option value="Pasig">Pasig</option>
                      <option value="Makati">Makati</option>
                    </select>
                    <div className="absolute top-2 left-1">
                      <FaBuilding size="1.5rem" className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Pick-up Date */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                  <div className="flex flex-col justify-center relative ">
                    <label
                      htmlFor="pickupDate"
                      className="pt-2  text-sm font-bold"
                    >
                      Pickup Date:
                    </label>
                    <input
                      className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      onChange={(e) => handlePickUpDate(e)}
                    />
                  </div>
                </div>

                {/* Pick-up Time */}
                <div className="flex justify-center items-center rounded-lg bg-white hidden">
                  <div className="flex flex-col justify-center">
                    <label
                      htmlFor="pickupTime"
                      className="pt-2 text-sm font-bold"
                    >
                      Time:
                    </label>
                    <input
                      className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                      type="time"
                      id="pickupTime"
                      name="pickupTime"
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div className="flex justify-center items-center rounded-lg bg-white ">
                  <div className="flex flex-col justify-center">
                    <label
                      htmlFor="pickupDate"
                      className="pt-2 text-sm font-bold"
                    >
                      Return Date:
                    </label>
                    <input
                      className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      onChange={(e) => handleReturnDate(e)}
                    />
                  </div>
                </div>

                {/* Return Time */}
                <div className="flex justify-center items-center rounded-lg bg-white hidden">
                  <div className="flex flex-col justify-center">
                    <label
                      htmlFor="pickupTime"
                      className="pt-2 text-sm font-bold"
                    >
                      Time:
                    </label>
                    <input
                      className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                      type="time"
                      id="pickupTime"
                      name="pickupTime"
                    />
                  </div>
                </div>

                {/* Selection of Car */}
                <div className="flex justify-center items-center rounded-lg bg-white py-2">
                  <div className="relative">
                    <select
                      className="rounded-lg pl-8 focus:ring-0 border-none"
                      id="carType"
                      name="carType"
                      onChange={(e) => handleCartype(e)}
                    >
                      <option disabled defaultValue>
                        Car Type
                      </option>
                      <option value="Luxury">Luxury</option>
                      <option value="Business">Business</option>
                      <option value="Family">Family</option>
                      <option value="Bridal">Bridal</option>
                      <option value="Pickup">Pickup</option>
                      <option value="Casual">Casual</option>
                    </select>
                    <div className="absolute top-2 left-1">
                      <FaCarAlt size="1.5rem" className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="bg-red-600 rounded-lg flex justify-center items-center">
                  <button
                    className="flex px-7 py-4 p-1 font-bold text-center"
                    onClick={(e) => handleSubmit(e)}
                  >
                    <FaSearch size="1.5rem" className="mr-1" />
                    <p>Search</p>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className=" flex justify-center items-center  xl:mx-auto xl:w-max rounded-lg bg-white relative bottom-16 sm:bottom-10 px-5 mx-5 lg:px-1 xl:px-5 py-5">
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 justify-center items-center">
                {/* Car specs */}
                <div className="flex justify-center items-center rounded-lg bg-white py-4 col-span-2 lg:col-span-1">
                  <div className="relative flex flex-row">
                    <FaBuilding size="2rem" className="text-primary" />
                    <h2 className="text-3xl ml-3">{location}</h2>
                  </div>
                </div>

                {/* Pick-up Date */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                  <div className="flex flex-col text-center py-1 justify-center relative">
                    <label htmlFor="pickupDate" className=" text-lg font-bold">
                      Pickup Date:
                    </label>
                    <h2 className="text-2xl">{pickUpDate}</h2>
                  </div>
                </div>

                {/* Pick-up Time */}
                <div className="flex justify-center items-center rounded-lg bg-white hidden">
                  <div className="flex flex-col text-center py-1 justify-center relative">
                    <label htmlFor="pickupDate" className=" text-lg font-bold">
                      Pickup Time:
                    </label>
                    <h2 className="text-2xl">
                      {(Number(pickUpTime.slice(0, 2)) % 12).toString() +
                        ":" +
                        pickUpTime.slice(
                          pickUpTime.length - 2,
                          pickUpTime.length
                        ) +
                        " " +
                        (Number(pickUpTime.slice(0, 2)) > 12 ? "PM" : "AM")}
                    </h2>
                  </div>
                </div>

                {/* Return Date */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                  <div className="flex flex-col text-center py-1 justify-center relative">
                    <label htmlFor="pickupDate" className=" text-lg font-bold">
                      Return Date:
                    </label>
                    <h2 className="text-2xl">{returnDate}</h2>
                  </div>
                </div>

                {/* Return Time */}
                <div className="flex justify-center items-center rounded-lg bg-white hidden">
                  <div className="flex flex-col text-center py-1 justify-center relative">
                    <label htmlFor="pickupDate" className=" text-lg font-bold">
                      Return Time:
                    </label>
                    <h2 className="text-2xl">
                      {(Number(returnTime.slice(0, 2)) % 12).toString() +
                        ":" +
                        returnTime.slice(
                          returnTime.length - 2,
                          returnTime.length
                        ) +
                        " " +
                        (Number(returnTime.slice(0, 2)) > 12 ? "PM" : "AM")}
                    </h2>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* Cards */}
          <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carFilter.map((car) => (
              <CarCard
                key={Math.floor(Math.random() * 100000000000)}
                car={car}
              />
            ))}
          </div>
          {/* End section of cards */}
        </div>
      </div>
    </div>
  );
};
