import React, { useEffect, useState } from "react";

const validationChecks = [
  {
    label: "At least 8 characters",
    check: (str) => str.length >= 8,
  },
  {
    label: "Both lower case and uppercase letters",
    check: (str) => /[a-z]/.test(str) && /[A-Z]/.test(str),
  },
  {
    label: "At least 1 number",
    check: (str) => /\d/.test(str),
  },
  {
    label: "At least 1 special character (e.g. !#$%^&*)",
    check: (str) => /[!#$%^&*]/.test(str),
  },
];

export default function PasswordValidator({ value, onChange }) {
  const validationsArray = validationChecks.map((rule) => rule.check(value));
  const isValid = validationsArray.every(Boolean);

  useEffect(() => {
    onChange((prevFields) => ({
      ...prevFields,
      isValid,
      validationsArray,
    }));
  }, [value, isValid]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={value}
          onChange={(e) =>
            onChange((prevFields) => ({
              ...prevFields,
              password: e.target.value,
            }))
          }
          placeholder="123abc"
        />
      </div>

      {/*  Grey/Green Bars */}
      <div className="flex">
        {validationsArray.map((valid, index) => (
          <span key={index} className={`h-2 w-full mx-0.5 rounded ${valid ? "bg-green-500" : "bg-gray-300"}`}></span>
        ))}
      </div>

      {/* Render Green Check or Red Cross */}
      <ul className="flex flex-col gap-1 text-sm">
        {validationChecks.map((rule, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={validationsArray[i] ? "text-green-600" : "text-red-600"}>
              {validationsArray[i] ? "✔" : "✖"}
            </span>
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
