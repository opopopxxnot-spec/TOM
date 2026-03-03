import React from 'react'
import './App.css'

export default function App() {
  const studentInfo = {
    name: "Aaryan Sharma",
    regNo: "2500031465",
    department: "Computer Science & Engineering"
  };

  const attendanceData = [
    { subject: "Data Structures", attendance: 82, classes: 41, total: 50 },
    { subject: "Web Development", attendance: 65, classes: 26, total: 40 },
    { subject: "Database Management", attendance: 58, classes: 23, total: 40 },
    { subject: "Algorithms", attendance: 78, classes: 35, total: 45 },
    { subject: "Operating Systems", attendance: 72, classes: 29, total: 40 }
  ];

  const getAttendanceColor = (percentage) => {
    if (percentage >= 75) {
      return "bg-green-100 border-green-300 text-green-800";
    } else if (percentage >= 60) {
      return "bg-yellow-100 border-yellow-300 text-yellow-800";
    } else {
      return "bg-red-100 border-red-300 text-red-800";
    }
  };

  const getAttendanceBadgeColor = (percentage) => {
    if (percentage >= 75) {
      return "bg-green-500 text-white";
    } else if (percentage >= 60) {
      return "bg-yellow-500 text-white";
    } else {
      return "bg-red-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            📚 Student Attendance Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="text-gray-600 text-sm font-semibold uppercase">Student Name</p>
              <p className="text-2xl font-bold text-blue-700">{studentInfo.name}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-600">
              <p className="text-gray-600 text-sm font-semibold uppercase">Register Number</p>
              <p className="text-2xl font-bold text-indigo-700">{studentInfo.regNo}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="text-gray-600 text-sm font-semibold uppercase">Department</p>
              <p className="text-2xl font-bold text-purple-700">{studentInfo.department}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Subject-wise Attendance</h2>
        <p className="text-gray-600 mb-8">Track your attendance across all subjects</p>
        
        {/* Attendance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendanceData.map((item, index) => {
            const colorClass = getAttendanceColor(item.attendance);
            const badgeColorClass = getAttendanceBadgeColor(item.attendance);
            
            return (
              <div
                key={index}
                className={`${colorClass} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105`}
              >
                {/* Subject Name */}
                <h3 className="text-xl font-bold mb-4">{item.subject}</h3>
                
                {/* Attendance Percentage Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`${badgeColorClass} px-4 py-2 rounded-full font-bold text-lg`}>
                    {item.attendance}%
                  </span>
                  {item.attendance >= 75 && <span className="text-2xl">✅</span>}
                  {item.attendance >= 60 && item.attendance < 75 && <span className="text-2xl">⚠️</span>}
                  {item.attendance < 60 && <span className="text-2xl">❌</span>}
                </div>

                {/* Attendance Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Classes Attended:</span>
                    <span className="font-bold">{item.classes}/{item.total}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      item.attendance >= 75 ? 'bg-green-600' :
                      item.attendance >= 60 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${item.attendance}%` }}
                  ></div>
                </div>

                {/* Status Message */}
                <div className="mt-4 text-sm font-semibold">
                  {item.attendance >= 75 && <p>✓ Great attendance!</p>}
                  {item.attendance >= 60 && item.attendance < 75 && <p>⚠ Need improvement</p>}
                  {item.attendance < 60 && <p>✗ Critical - Attendance needed</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Attendance Status Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg">✓</div>
              <div>
                <p className="font-bold text-green-700">75% and Above</p>
                <p className="text-gray-600 text-sm">Excellent attendance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg">⚠</div>
              <div>
                <p className="font-bold text-yellow-700">60% - 75%</p>
                <p className="text-gray-600 text-sm">Needs improvement</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-lg">✗</div>
              <div>
                <p className="font-bold text-red-700">Below 60%</p>
                <p className="text-gray-600 text-sm">Critical status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
