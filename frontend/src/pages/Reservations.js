import {
  FaBuilding,
  FaSearch,
  FaTimesCircle,
  FaFilter,
  FaUsers,
  FaTachometerAlt,
  FaCogs,
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
  const [carFetch, setCarFetch] = useState([]);
  const path = window.location.search.split("&");
  const location = path[0].split("=")[1];
  const pickUpDate = path[1].split("=")[1];
  const pickUpTime = path[2].split("=")[1];
  const returnDate = path[3].split("=")[1];
  const returnTime = path[4].split("=")[1];
  const carType = path[5].split("=")[1];
  console.log(
    location,
    pickUpDate,
    pickUpTime,
    returnDate,
    returnTime,
    carType
  );
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
        setCarFetch(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(carFetch);
  const transmissionOptions = ["Automatic", "Manual"];

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
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
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

          <div className=" flex justify-center items-center  xl:mx-auto xl:w-max rounded-lg bg-white relative bottom-16 sm:bottom-10 px-5 mx-5 lg:px-1 xl:px-5 py-5">
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 justify-center items-center">
                <div className="flex items-center md:col-span-7 md:col-start-3 lg:col-span-1">
                  <h2 className="text-lg font-bold flex items-center">
                    <FaFilter className="mr-2" />{" "}
                    {/* Assuming you want to use the FaFilter icon */}
                    <span>Filter</span>
                  </h2>
                </div>

                {/* Car Specs */}
                <div className="relative col-span-1">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle bg-white rounded-lg py-2 flex items-center justify-between w-full md:justify-center"
                      onClick={handleCarSpecsToggleDropdown}
                    >
                      Car Specs
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${
                          isCarSpecsOpen ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isCarSpecsOpen && (
                      <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                        <div className="flex flex-col p-4">
                          {carSpecsOptions.map((option) => (
                            <label
                              htmlFor={option}
                              className="flex items-center"
                              key={option}
                            >
                              <input
                                type="checkbox"
                                id={option}
                                name="carSpecs"
                                value={option}
                                checked={selectedCarSpecs.includes(option)}
                                onChange={handleCarSpecsChange}
                              />
                              <span className="ml-2">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Car Categories */}
                <div className="relative">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle bg-white rounded-lg  py-2 flex items-center justify-between w-full"
                      onClick={handleCarCategoriesToggleDropdown}
                    >
                      Car Categories
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${
                          isCarCategoriesOpen ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isCarCategoriesOpen && (
                      <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                        <div className="flex flex-col p-4">
                          {carCategoriesOptions.map((option) => (
                            <label
                              htmlFor={option}
                              className="flex items-center"
                              key={option}
                            >
                              <input
                                type="checkbox"
                                id={option}
                                name="carCategories"
                                value={option}
                                checked={selectedCarCategories.includes(option)}
                                onChange={handleCarCategoriesChange}
                              />
                              <span className="ml-2">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Transmission */}
                <div className="relative">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle bg-white rounded-lg pl-4 py-2 flex items-center justify-between w-full"
                      onClick={handleTransmissionToggleDropdown}
                    >
                      Transmission
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${
                          isTransmissionOpen ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isTransmissionOpen && (
                      <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                        <div className="flex flex-col p-4">
                          {transmissionOptions.map((option) => (
                            <label
                              htmlFor={option}
                              className="flex items-center"
                              key={option}
                            >
                              <input
                                type="checkbox"
                                id={option}
                                name="transmission"
                                value={option}
                                checked={selectedTransmission.includes(option)}
                                onChange={handleTransmissionChange}
                              />
                              <span className="ml-2">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button className="flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 col-span-2 lg:col-span-1 lg:col-start-6">
                  <FaSearch className="mr-2" />
                  Search
                </button>

                <button className="flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 col-span-2 lg:col-span-1">
                  <FaTimesCircle className="mr-2" />
                  Clear Filter
                </button>
              </div>
            </form>
          </div>
          {/* Cards */}
          <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carFetch.map((car) => (
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
