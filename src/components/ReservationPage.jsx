import { useContext } from 'react';
import { GlobalFormData } from '../main';

export default function ReservationPage() {
  const { formData, setFormData, handleSubmit } = useContext(GlobalFormData);

  function handleChange(e) {
    console.log(e.target.value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.id]: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="reservations">
        <h1>Make a Reservation</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            value={formData.name}
          />
          <label htmlFor="partySize">Party Size</label>
          <input
            onChange={handleChange}
            id="partySize"
            type="number"
            value={formData.partySize}
          />
          <label htmlFor="date">Date</label>
          <input
            onChange={handleChange}
            type="date"
            id="date"
            value={formData.date}
          />
          <label htmlFor="time">Time</label>
          <input
            onChange={handleChange}
            type="time"
            id="time"
            value={formData.time}
          />
          <button onClick={handleSubmit} type="submit">
            Make Reservation
          </button>
        </form>
      </div>
    </>
  );
}
