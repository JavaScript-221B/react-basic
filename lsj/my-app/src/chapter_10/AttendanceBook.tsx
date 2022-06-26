import React from "react";

const students = [
  { id: 1, name: "Seongjae" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Tom" },
];

type Props = {};

function AttendanceBook({}: Props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={`student-id-${student.id}`}>{student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
