// component will be used in Employee, then Employee List, then App.jsx, then index.jsx
export const PetList = ({ pets }) => { // data stored in pets
  // api contains array of objects with pet name located in "name" key
  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{pets.map(pet => pet.name).join(', ')}</p>
      ) : (
        <p>No pets listed for this employee.</p> // ternary if employee doesn't see any pets at hospital
      )}
    </aside>
  );
};

export default PetList;