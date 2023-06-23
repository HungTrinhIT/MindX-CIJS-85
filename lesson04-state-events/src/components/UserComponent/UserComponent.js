import { useState } from "react";

const UserComponent = () => {
  const [user, setUser] = useState({
    name: "Leo Messi",
    age: 37,
    club: "NaN",
  });

  const onIncreaseAgeHandler = () => {
    // const clonedUser = { ...user };
    // clonedUser.age += 1;
    // override
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h4>
        <strong>Age:</strong> {user.age}
      </h4>
      <p>
        <strong>Club:</strong> {user.club.toUpperCase()}
      </p>
      <button onClick={onIncreaseAgeHandler}>Click me!</button>
    </div>
  );
};

export default UserComponent;
