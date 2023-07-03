import Sidebar from "../components/User/Sidebar";
import { useState } from "react";

import Upload from "../assets/User.png";

export const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
    validateForm();
    console.log(validateForm());
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Choose Gender");
  const [genderSubmitted, setGenderSubmitted] = useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = useState("");
  const [age, setAge] = useState("");
  const [civilStatus, setCivilStatus] = useState("Choose Status");
  const [civilStatusSubmitted, setCivilStatusSubmitted] = useState(false);
  const [civilStatusErrorMessage, setCivilStatusErrorMessage] = useState("");
  const [nationality, setNationality] = useState("");
  const [building, setBuilding] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleMiddlename = (event) => {
    setMiddlename(event.target.value);
  };
  const handleSuffix = (event) => {
    setSuffix(event.target.value);
  };
  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderErrorMessage("");
  };
  const handleCivilStatusChange = (event) => {
    setCivilStatus(event.target.value);
    setCivilStatusErrorMessage("");
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handleMunicipalityChange = (event) => {
    setMunicipality(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!birthdate.trim()) {
      errors.birthdate = "Birthdate is required";
    }
    if (!age.trim()) {
      errors.age = "Age is required";
    }
    if (!nationality.trim()) {
      errors.nationality = "Nationality is required";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "PhoneNumber is required";
    }
    if (!building.trim()) {
      errors.building = "Building / Blk is required";
    }
    if (!municipality.trim()) {
      errors.municipality = "Municipality is required";
    }
    if (!city.trim()) {
      errors.city = "City is required";
    }
    if (!province.trim()) {
      errors.province = "Province is required";
    }
    if (!zipcode.trim()) {
      errors.zipcode = "Zipcode is required";
    }

    if (civilStatus === "Choose Status") {
      setCivilStatusErrorMessage("Please choose a civil status");
      setCivilStatusSubmitted(true);
    }

    if (gender === "Choose Gender") {
      setGenderErrorMessage("Please choose a gender");
      setGenderSubmitted(true);
    }

    // Add validation rules for other fields...
    setFormErrors(errors);
    // Return true if the form is valid (no errors)
    return Object.keys(errors).length === 0;
  };

  return (
    <div>
      <div className="bg-shade py-28 ">
        <div className="container1">
          <div className="flex bg-white h-screen">
            <div className="basis-[20%]">
              <Sidebar />
            </div>
            <div className="basis-[80%]">
              <div className=" mt-10 flex flex-col items-center justify-center">
                <form action="">
                  {/* 1st row */}
                  <div className="container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
                    <div className="flex flex-col">
                      <label htmlFor="firstname" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="First name"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="middlename"
                        className="w-full px-3  py-2 sm:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                        placeholder="Middle name"
                        onChange={handleMiddlename}
                      />
                    </div>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="w-full px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Last name"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 pb-5">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="suffix"
                        className="w-full md:w-full lg:w-36 px-3 py-2 border mb-5 lg:mt-6 border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                        placeholder="Suffix"
                        onChange={handleSuffix}
                      />
                    </div>{" "}
                    {/* 1st row */}
                  </div>
                  {/* 2nd row */}
                  <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                      <label htmlFor="birthday" className="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        value={birthdate}
                        onChange={handleBirthdateChange}
                        className="w-full lg:w-56  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                        placeholder="Birthday"
                      />
                      {formErrors.birthdate && (
                        <p className="text-red-500 pb-5">
                          {formErrors.birthdate}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={handleAgeChange}
                        className="w-full lg:w-56   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Age"
                      />
                      {formErrors.age && (
                        <p className="text-red-500 pb-5">{formErrors.age}</p>
                      )}
                    </div>

                    <div className="flex flex-col mb-5">
                      <label htmlFor="gender" className="form-label">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={gender}
                        onChange={handleGenderChange}
                        className="w-full lg:w-56  px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option disabled value="Choose Gender">
                          Choose Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">Others</option>
                      </select>
                      {genderSubmitted && genderErrorMessage && (
                        <p className="text-red-500 pb-5">
                          Please choose a gender
                        </p>
                      )}
                    </div>
                  </div>
                  {/* 3rd row */}
                  <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                      <label htmlFor="status" className="form-label">
                        Civil Status
                      </label>
                      <select
                        id="status"
                        value={civilStatus}
                        onChange={handleCivilStatusChange}
                        className="w-full  lg:w-56  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option disabled value="Choose Status">
                          Choose Status
                        </option>
                        <option value="male">Single</option>
                        <option value="Female">Married</option>
                        <option value="others">Complicated</option>
                      </select>
                      {civilStatusSubmitted && civilStatusErrorMessage && (
                        <p className="text-red-500">Please choose a status</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phonenumber" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phonenumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="w-full lg:w-56  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="XXX-XXX-XXXX"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500">{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div className=" flex flex-col mb-5">
                      <label htmlFor="nationality" className="form-label">
                        Nationality
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        value={nationality}
                        onChange={handleNationalityChange}
                        className="w-full lg:w-56  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primary"
                        placeholder="Nationality"
                      />
                      {formErrors.nationality && (
                        <p className="text-red-500">{formErrors.nationality}</p>
                      )}
                    </div>
                  </div>
                  {/* 4th row */}
                  <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="input"
                        id="address"
                        value={building}
                        onChange={handleBuildingChange}
                        className="w-full lg:w-56  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Building/Blk/Lot"
                      />
                      {formErrors.building && (
                        <p className="text-red-500">{formErrors.building}</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        type="input"
                        className="w-full lg:w-56  px-3  py-2 sm:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Street Name"
                      />
                    </div>

                    <div className="flex flex-col sm:mb-5">
                      <input
                        type="input"
                        value={municipality}
                        onChange={handleMunicipalityChange}
                        className="w-full lg:w-56  px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primary"
                        placeholder="Bgry/Municipality"
                      />
                      {formErrors.municipality && (
                        <p className="text-red-500 pb-5">
                          {formErrors.municipality}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* 5th row */}
                  <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                      <input
                        type="input"
                        value={city}
                        onChange={handleCityChange}
                        className="w-full lg:w-56  px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="City"
                      />
                      {formErrors.city && (
                        <p className="text-red-500">{formErrors.city}</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        type="input"
                        value={province}
                        onChange={handleProvinceChange}
                        className="w-full lg:w-56  px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Province"
                      />
                      {formErrors.province && (
                        <p className="text-red-500">{formErrors.province}</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        type="input"
                        value={zipcode}
                        onChange={handleZipcodeChange}
                        className="w-full lg:w-56  px-3 py-2 lg:mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder=" ZIp Code "
                      />
                      {formErrors.zipcode && (
                        <p className="text-red-500">{formErrors.zipcode}</p>
                      )}
                    </div>
                  </div>

                  {/* End Upload File */}
                  <div className="flex justify-end py-5 px-16">
                    <button
                      to="/"
                      className="inline-block bg-primary hover:bg-cyan-900 text-white font-bold py-2 px-6 rounded-lg"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
