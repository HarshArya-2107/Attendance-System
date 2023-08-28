import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Patel', present: false },
    { id: 2, name: 'Riya Sharma', present: false },
    { id: 3, name: 'Aditya Verma', present: false },
    { id: 4, name: 'Aanya Gupta', present: false },
    { id: 5, name: 'Arjun Singh', present: false },
    { id: 6, name: 'Ananya Mehta', present: false },
    { id: 7, name: 'Aryan Joshi', present: false },
    { id: 8, name: 'Ishika Shah', present: false },
    { id: 9, name: 'Dhruv Malhotra', present: false },
    { id: 10, name: 'Saanvi Kumar', present: false },
    { id: 11, name: 'Vivaan Agarwal', present: false },
    { id: 12, name: 'Aadhya Choudhury', present: false },
    { id: 13, name: 'Vihaan Sharma', present: false },
    { id: 14, name: 'Anika Patel', present: false },
    { id: 15, name: 'Advait Sengupta', present: false },
    { id: 16, name: 'Prisha Das', present: false },
    { id: 17, name: 'Vivaan Singh', present: false },
    { id: 18, name: 'Arnav Kapoor', present: false },
    { id: 19, name: 'Aarohi Iyer', present: false },
    { id: 20, name: 'Krish Desai', present: false },
    { id: 21, name: 'Anvi Khanna', present: false },
    { id: 22, name: 'Kabir Yadav', present: false },
    { id: 23, name: 'Myra Bhatia', present: false },
    { id: 24, name: 'Anika Gupta', present: false },
    { id: 25, name: 'Dhruv Sharma', present: false },
    { id: 26, name: 'Avni Singh', present: false },
    { id: 27, name: 'Siya Das', present: false },
    { id: 28, name: 'Ishita Kapoor', present: false },
    { id: 29, name: 'Arjun Sharma', present: false },
    { id: 30, name: 'Vivaan Choudhury', present: false },

   ]);

  const handleToggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmitAttendance = () => {
    
    alert("Submitted Successfully")
    console.log(students);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>CLASS ATTENDANCE SYSTEM</h1>
      </header>
      <div className='col-md-12 text-center mt-5'>
      <div className="shadow rounded TodayDate">
        <h2>TODAY'S DATE  :  {new Date().toLocaleDateString()}</h2>
        </div>
        </div>
        <div className="student-list">
          {students.map((student) => (
            <div key={student.id} className="student">
              <label>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleToggleAttendance(student.id)}
                />
                <span className="checkmark">
                  {student.present ? <FaCheck /> : <FaTimes />}
                </span>
                {student.name}
              </label>
            </div>
          ))}
        </div>
        <button className="submit-btn" onClick={handleSubmitAttendance}>
          Submit Attendance
        </button>
      
    </div>
  );
}

export default App;
