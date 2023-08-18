import React from "react"; 

export default function TripData({alert, tripDatas,handleDelete}) { 
  // console.log(tripDatas)

  return (
    <>
      {tripDatas.length > 0 ? (
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="previewBooked"
            >
              {tripDatas.map((tripData) => (
                <tr className="bookedTable text-black" key={tripData.id} id={tripData.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <p className="bookedFrom">
                        {tripData.destinationFrom}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="bookedTo">{tripData.destinationTo}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="bookedDate">{tripData.journeyDate}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="bookedGustes">{tripData.guestCount}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bookedClass">
                      {" "}
                      {tripData.ticketClass}{" "}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button className="remove" onClick={()=>handleDelete(tripData.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className={`${   alert ? "block" : "hidden"   } text-center py-4 lg:px-4`}
          >
            <div
              className="p-2 bg-yellow-200 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-black uppercase px-2 py-1 text-xs font-bold mr-3 ">
                Alert
              </span>
              <span className="font-semibold text-black mr-2 text-left flex-auto">
                Maximum 3 trip can be added. Please delete to add more
              </span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

// {
//     "id": "4d3c3825-b169-4045-a180-d4884d86c311",
//     "destinationFrom": "Sylhet",
//     "destinationTo": "Dhaka",
//     "journeyDate": "1972-05-23",
//     "guestCount": "4",
//     "ticketClass": "Economy"
// },
{
  /* <div>
{tripDatas.map((trip) => (
  <div key={trip.id}>
    <p>ID: {trip.id}</p>
    <p>From: {trip.destinationFrom}</p>
    <p>To: {trip.destinationTo}</p>
    <p>Date: {trip.journeyDate}</p>
    <p>Guests: {trip.guestCount}</p>
    <p>Class: {trip.ticketClass}</p>
    <hr />
  </div>
))}
</div> */
}
