
export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      {pets.length === 0 ? <p>
        No Pets found.
      </p> :
      <ul>
        <li style={{ listStyle: 'none', marginLeft: '-40px'}}>
        {pets.map((pet, index) => (
          <span key={pet.id}>
            {index === pets.length - 1 ? pet.name : `${pet.name}, `}
          </span>
        ))}
        </li>
      </ul>
        }
    </aside>
  );
};

export default PetList;
