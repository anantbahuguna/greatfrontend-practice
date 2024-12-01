import { useCallback, useState } from "react";

//flight booker form - controlled component
// use html form validations
//accessibility label

const TODAY = formatDate(new Date());
const DAY_IN_MS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return [year, month, day].join("-");
}

function App() {
  const [bookingData, setBookingData] = useState({
    flightType: "one-way",
    departureDate: formatDate(new Date(Date.now() + DAY_IN_MS)), //start from tomorrow
    returnDate: formatDate(new Date(Date.now() + DAY_IN_MS)),
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (bookingData.flightType === "one-way") {
        alert(
          `You have booked a one-way flight on ${bookingData.departureDate}`
        );
        return;
      }

      alert(
        `You have booked a return flight, departing on ${bookingData.departureDate} and returning on ${bookingData.returnDate}`
      );
    },
    [bookingData]
  );

  return (
    <form onSubmit={onSubmit}>
      <select
        name="flightType"
        value={bookingData.flightType}
        onChange={onChange}
      >
        <option value="one-way">One-way flight</option>
        <option value="return">Return flight</option>
      </select>
      <input
        type="date"
        name="departureDate"
        value={bookingData.departureDate}
        onChange={onChange}
        min={TODAY}
        aria-label="Departure date"
      />
      {bookingData.flightType !== "one-way" && (
        <input
          type="date"
          name="returnDate"
          value={bookingData.returnDate}
          onChange={onChange}
          aria-label="Return date"
          min={bookingData.departureDate}
        />
      )}

      <button type="submit">Book</button>
    </form>
  );
}

export default App;
