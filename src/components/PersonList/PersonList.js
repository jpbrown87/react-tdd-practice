import "./PersonList.css";

const PersonList = ({ listOfPeople }) => {
  return (
    <>
      {listOfPeople.length > 0 ? (
        <ul>
          {listOfPeople.map((person) => (
            <li key={`Person List Item${person.id}`}>
                { person.name }
                <button type="button">Edit</button>              
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no people to list</p>
      )}
    </>
  );
};

export default PersonList;
