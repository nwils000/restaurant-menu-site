import { IoMdCart } from 'react-icons/io';
import { GlobalCartData } from '../main';
import { useContext } from 'react';

export default function CartButton(props) {
  const { setCartData } = useContext(GlobalCartData);

  return (
    <div
      className="likes"
      onClick={() => {
        setCartData((prevCartData) => ({
          ...prevCartData,
          totalAmountOfItems: prevCartData.totalAmountOfItems + 1,
          items: [
            ...prevCartData.items,
            { name: props.title, price: props.price },
          ],
        }));
      }}
    >
      <div className="heart-circle">
        <IoMdCart className="heart" />
      </div>
    </div>
  );
}
