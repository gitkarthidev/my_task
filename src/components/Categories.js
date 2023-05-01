import React from "react";

const list = [
  "Development",
  "Buisness",
  "Finance & Accounting",
  "IT & Software",
  "OfficeProductity",
  "PersonalDevelopment",
  " Design",
  "Marketing",
  "LifeStyle",
];
const Categories = () => {
  return (
    <div
      style={{
        boxShadow: "5px 5px 10px #ccc",
        maxWidth: "400px",
        marginTop: "32px",
        maxHeight: "400px",
        marginLeft: "120px",
        position: "absolute",
        top: "35px",
        zIndex: 1,
      }}
    >
      {list.map((item) => (
        <li style={{ margin: "10px", listStyle: "none", cursor: "pointer" }}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default Categories;
