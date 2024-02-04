import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ carss: { searchTerm, cars } }) => {
    return cars
      .filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, cval) => acc + cval.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
