import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const {cars,name} = useSelector(({formss, carss:{cars, searchTerm}}) => {
    const filteredCars= cars.filter((e)=>e.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      name:formss.name,
      cars: filteredCars
    }
  });

  // const {name}=useSelector((state)=>state.formss);

  console.log(name)
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    // dispatch(removeCar(car));
    dispatch(removeCar(car.id));
  };

  return (
    <div className="car-list">
      {cars.map((car) => {
            //decide if car should be bold    
        const bold=name && car.name.toLowerCase().includes(name.toLowerCase())
       return <div key={car.id} className={`panel ${bold && 'bold'}`}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleCarDelete(car)}
          >
            Delete
          </button>
        </div>
      })}
    </div>
  );
}

export default CarList;
