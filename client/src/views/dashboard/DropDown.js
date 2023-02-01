/* eslint-disable prettier/prettier */
import React, { useState } from "react";

const DropDown = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState("");
  const [secondDropdownValue, setSecondDropdownValue] = useState("");
  const firstDropdownOptions = [
    { value: "MOC/MTC", label: "MOC/MTC" },
    { value: "SMSMO/SMSMT", label: "SMSMO/SMSMT" },
    { value: "Data", label: "Data" },
    { value: "Roaming", label: "Roaming" },
    { value: "Provisioning", label: "Provisioning" },
    { value: "CUG", label: "CUG" },
    { value: "SpeedBox/AirBox", label: "SpeedBox/AirBox" },
    { value: "Orange Money", label: "Orange Money" },
    { value: "Enterprise", label: "Enterprise" },
    { value: "KPI", label: "KPI" },
    { value: "Others", label: "Others" },
  ];
  const secondDropdownOptions = {
    "MOC/MTC": [
      { value: "Calling Number", label: "Calling Number" },
      { value: "Called Number", label: "Called Number" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    "SMSMO/SMSMT": [
      { value: "Calling Number", label: "Calling Number" },
      { value: "Called Number", label: "Called Number" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    Data: [
      { value: "Customer’s Number", label: "Customer’s Number" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    Roaming: [
      { value: "Customer’s Number", label: "Customer's Number" },
      { value: "Location", label: "Location" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    Provisioning: [
      { value: "Customer’s Number", label: "Customer's Number" },
      { value: "Details", label: "Details" },
    ],
    CUG: [
      { value: "CUG ID", label: "CUG ID" },
      { value: "Sample Numbers", label: "Sample Numbers" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],

    "SpeedBox/AirBox": [
      { value: "Sample Numbers", label: "Sample Numbers" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],


    "Orange Money": [
      { value: "Customer's Numbers", label: "Customer's Numbers" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    Enterprise: [
      { value: "Client's Name", label: "Client's Name" },
      { value: "Timestamp", label: "Timestamp" },
      { value: "Details", label: "Details" },
    ],
    KPI: [
      { value: "KPI Name", label: "KPI Name" },
      { value: "Details", label: "Details" },
    ],
    Others: [
      { value: "Others", label: "Others" },
    ]
  };

  return (
    <div>
      <div>
        <label>First Dropdown:</label>
        <select
          value={firstDropdownValue}
          onChange={e => setFirstDropdownValue(e.target.value)}
        >
          <option value="">Select an option</option>
          {firstDropdownOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Second Dropdown:</label>
        <select
          value={secondDropdownValue}
          onChange={e => setSecondDropdownValue(e.target.value)}
          disabled={!firstDropdownValue}
        >
          <option value="">Select a sub option</option>
          {secondDropdownOptions[firstDropdownValue]
            ? secondDropdownOptions[firstDropdownValue].map(subOption => (
              <option key={subOption.value} value={subOption.value}>
                {subOption.label}
              </option>
            ))
            : null}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
