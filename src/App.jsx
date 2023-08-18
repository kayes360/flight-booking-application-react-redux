import Logo from "./assets/img/logo.gif";
import Vector1 from "./assets/img/icons/Vector(1).svg";
import Vector3 from "./assets/img/icons/Vector(3).svg";
import Frame from "./assets/img/icons/Frame.svg";
import { useState } from "react";

import { add, deleteSchedule } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import TripData from "./Components/TripData";

function App() {
  const [destinationFrom, setDestinationFrom] = useState();
  const [destinationTo, setDestinationTo] = useState();
  const [journeyDate, setJourneyDate] = useState();
  const [guestCount, setGuestCount] = useState();
  const [ticketClass, setTicketClass] = useState();
  const [alert, setAlert] = useState(false);

  const tripDatas = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tripData = {
      id: crypto.randomUUID(),
      destinationFrom,
      destinationTo,
      journeyDate,
      guestCount,
      ticketClass,
    };
    if (tripDatas.length < 3) {
      dispatch(add(tripData));
    } else {
      setAlert(true);
    }
  };
  const handleDelete = (tripId) => { 
    dispatch(deleteSchedule(tripId));
    setAlert(false);
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <img src={Logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero inputform">
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={Frame} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="from"
                    required
                    onChange={(e) => setDestinationFrom(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={Frame} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="to"
                    required
                    onChange={(e) => setDestinationTo(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="date"
                  required
                  onChange={(e) => setJourneyDate(e.target.value)}
                />
              </div>

              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={Vector1} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="guests"
                    required
                    onChange={(e) => setGuestCount(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={Vector3} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="ticketClass"
                    required
                    onChange={(e) => setTicketClass(e.target.value)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                className="addCity"
                type="submit"
                id="addCity"
                onClick={handleSubmit}
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        <TripData
          alert={alert}
          handleDelete={handleDelete}
          tripDatas={tripDatas}
        />
      </section>
    </>
  );
}

export default App;
