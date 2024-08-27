import React from "react";

const CheckboxColumn = ({ label, isChecked, onChange }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

const Footer = () => {
  const checkboxes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  return (
    <div className="flex flex-wrap">
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="w-1/7 p-2">
          <CheckboxColumn label={checkbox.label} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
