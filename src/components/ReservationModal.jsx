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
      <p>
        <span>Name:</span>{' '}
        <span style={{ fontWeight: 'bold' }}>{formData.name}</span>
      </p>
      <p>
        <span>Party Size:</span>{' '}
        <span style={{ fontWeight: 'bold' }}>{formData.partySize}</span>
      </p>
      <p>
        <span>Date:</span>{' '}
        <span style={{ fontWeight: 'bold' }}>{formData.date}</span>
      </p>
      <p>
        <span>Time:</span>{' '}
        <span style={{ fontWeight: 'bold' }}>{formData.time}</span>
      </p>
    </div>
  );
}
