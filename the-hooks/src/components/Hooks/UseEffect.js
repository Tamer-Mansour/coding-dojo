import React, { useEffect, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("Tamer");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `celebrate ${name}`;
    console.log({ name });
  }, [name]);

  useEffect(() => {
    console.log(`the user is: ${admin ? "admin" : "Not admin"}.`);
  }, [admin]);
  return (
    <section>
      <p>congracolatin {name} !</p>
      <button onClick={() => setName("MR.Tamer")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"} !</p>
      <button onClick={() => setAdmin(true)}>Log In</button>
    </section>
  );
}
export default UseEffect;
