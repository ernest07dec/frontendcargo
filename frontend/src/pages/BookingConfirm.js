import { NavLink } from "react-router-dom";
import confirm from "../assets/confirmed.png";
import { useNavigate } from "react-router-dom";

export const BookingConfirm = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  window.onload = function handleUser() {
    if (!user) {
      navigate("/signin");
      // alert("Please log in first to continue");
    }
  };
  return (
    <div className="bg-shade">
      <div className="__container">
        <div className="py-32">
          <div>
            <div className="text-center py-">
              <h2 className="text-primary text-3xl pb-2 font-bold">
                Hooray! Your car is RESERVED.
              </h2>
              <p className="font-semibold pb-10">
                Here are your OFFICIAL Booking Details
              </p>
              <h2 className="text-primary text-xl font-bold pb-4">
                Booking Details
              </h2>
            </div>
            <div className="bg-light flex flex-col justify-center px-10 relative rounded-lg">
              <div className="absolute left-1/2 -top-20 transform -translate-x-1/2 w-full">
                <img src={confirm} alt="" className=" mx-auto opacity-50" />
              </div>

              <h2 className="text-center pt-3 pb-10 text-primary text-xl font-bold">
                ID# LABC123
              </h2>
              <div className="flex flex-col sm:flex-row justify-between font-bold z-10">
                <p>Name: Drei Loreto</p>
                <p>Booking ID: LABC123</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold z-10">
                <p>Car Type: Luxury</p>
                <p>Pick-Up Date: June 28, 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold z-10">
                <p>Unit: Testla Model Y</p>
                <p>Return Date: June 28, 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold z-10">
                <p>Daily Price: Php 20,000</p>
                <p>Total Days: 2 Days</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold z-10">
                <p>Cargo Protect: Yes</p>
                <p>Driving Preference: Self-Drive</p>
              </div>
              <h2 className="py-5 text-center text-primary font-bold text-2xl z-10">
                To be Paid:
              </h2>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">
                Php 45,500
              </h2>
              <hr className="border-t-2 border-black" />
              <p className="font-bold text-2xl py-5  text-center">
                What's next?
              </p>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">1.</p>
                <p>
                  {" "}
                  A personnel from our office will call you within{" "}
                  <span className="text-primary">24-hours</span> after
                  confirming this order. They will verify your submitted
                  information and make sure that everything is good to go.
                </p>
              </div>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">2.</p>
                <p>
                  You will be educated about the payment process and give you
                  the payment information that you will need based on your
                  preferred payment method (Please be informed that we do not
                  accept credit card payments).
                </p>
              </div>
              <div className="flex pb-3 font-semibold">
                <p className="pr-3">3.</p>
                <p>
                  Your payment is expected within{" "}
                  <span className="text-primary">48-hours</span> upon confirming
                  your reservation. You will be requested to send the payment
                  confirmation to our email address{" "}
                  <span className="tet-primary">cargorentals@gmail.com.</span>{" "}
                  Failure to make a payment within he allotted time will
                  automatically cancel the reservation.
                </p>
              </div>
              <div className="flex font-semibold pb-20">
                <p className="pr-3">4.</p>
                <p>
                  If there are any questions, concerns, or disputes about your
                  reservation, please contact us through email,{" "}
                  <span className="text-primary">cargorentals@gmail.com,</span>{" "}
                  or via mobile (+63) 988 123 4567) and landline (02) 846 9564).
                  Our Customer Support line is open 24/7 to assist you anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
