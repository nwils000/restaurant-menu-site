import { GlobalFormData } from '../main';
import { useContext } from 'react';
import '../styles/ReservationModal.css';

export default function ReservationPage() {
  const { formData, closeModal } = useContext(GlobalFormData);

  return (
    <div
      className="reservation-modal"
      style={{ display: formData.modalDisplay }}
    >
      <p>Upcoming Reservation!</p>
      <p className="close-modal" onClick={closeModal}>
        X
      </p>
      <p>Name: {formData.name}</p>
      <p>Party Size: {formData.partySize}</p>
      <p>Date: {formData.date}</p>
      <p>Time: {formData.time}</p>
    </div>
  );
}
