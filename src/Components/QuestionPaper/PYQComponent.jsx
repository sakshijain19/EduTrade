/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { FiDownload, FiSearch } from 'react-icons/fi'

// Updated subjects for Computer Engineering
const computerEngineeringSubjects = [
  [
    "Engineering Mathematics-I",
    "Engineering Physics / Engineering Chemistry",
    "Systems in Mechanical Engineering",
    "Basic Electrical Engineering / Basic Electronics Engineering",
    "Programming and Problem Solving / Engineering Mechanics"
  ],
  [
    "Engineering Mathematics-II",
    "Engineering Physics / Engineering Chemistry",
    "Basic Electrical Engineering / Basic Electronics Engineering",
    "Programming and Problem Solving / Engineering Mechanics",
    "Engineering Graphics"
  ],
  [
    "Discrete Mathematics",
    "Fundamentals of Data Structures",
    "Object Oriented Programming (OOP)",
    "Computer Graphics",
    "Digital Electronics and Logic Design"
  ],
  [
    "Engineering Mathematics III",
    "Data Structures and Algorithms",
    "Software Engineering",
    "Microprocessor",
    "Principles of Programming Languages"
  ],
  [
    "Database Management Systems",
    "Theory of Computation",
    "Systems Programming and Operating System",
    "Computer Networks and Security",
    "Elective I - Internet of Things and Embedded Systems"
  ],
  [
    "Data Science and Big Data Analytics",
    "Web Technology",
    "Artificial Intelligence",
    "Cloud Computing"
  ],
  [
    "Design and Analysis of Algorithms",
    "Machine Learning",
    "Blockchain Technology",
    "Cyber Security and Digital Forensics",
    "Mobile Computing"
  ],
  [
    "High Performance Computing",
    "Deep Learning",
    "Natural Language Processing",
    "Elective-VI Business Intelligence"
  ]
]

// Mock data for branches with subjects
const questionPapers = {
  "Civil Engineering": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Semester ${i + 1}`,
    subjects: Array.from({ length: 5 }, (_, j) => ({
      id: j + 1,
      name: `Sub ${j + 1}`,
      url: `https://drive.google.com/file/d/your-link-${i + 1}-${j + 1}`
    }))
  })),
  "Computer Engineering": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Semester ${i + 1}`,
    subjects: computerEngineeringSubjects[i].map((subject, j) => ({
      id: j + 1,
      name: subject,
      url: `https://drive.google.com/file/d/your-link-computer-${i + 1}-${j + 1}`
    }))
  })),
  "Mechanical Engineering": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Semester ${i + 1}`,
    subjects: Array.from({ length: 5 }, (_, j) => ({
      id: j + 1,
      name: `Sub ${j + 1}`,
      url: `https://drive.google.com/file/d/your-link-${i + 1}-${j + 1}`
    }))
  })),
  "Electronics and Telecommunication Engineering": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Semester ${i + 1}`,
    subjects: Array.from({ length: 5 }, (_, j) => ({
      id: j + 1,
      name: `Sub ${j + 1}`,
      url: `https://drive.google.com/file/d/your-link-${i + 1}-${j + 1}`
    }))
  })),
  "AIDS (Artificial Intelligence and Data Science)": Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Semester ${i + 1}`,
    subjects: Array.from({ length: 5 }, (_, j) => ({
      id: j + 1,
      name: `Sub ${j + 1}`,
      url: `https://drive.google.com/file/d/your-link-${i + 1}-${j + 1}`
    }))
  }))
}

export default function PYQComponent() {
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubjects = selectedSemester
    ? selectedSemester.subjects.filter(sub => 
        sub.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Previous Year Question Papers (PYQ)</h1>

          <div className="mb-4">
            <select
              className="w-full p-2 border rounded-md"
              onChange={(e) => {
                setSelectedBranch(e.target.value)
                setSelectedSemester(null)
              }}
              value={selectedBranch || ""}
            >
              <option value="">Select Branch</option>
              {Object.keys(questionPapers).map(branch => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              className="w-full p-2 border rounded-md"
              onChange={(e) => setSelectedSemester(questionPapers[selectedBranch].find(sem => sem.id === parseInt(e.target.value)))}
              value={selectedSemester ? selectedSemester.id : ""}
              disabled={!selectedBranch}
            >
              <option value="">Select Semester</option>
              {selectedBranch && questionPapers[selectedBranch].map(sem => (
                <option key={sem.id} value={sem.id}>{sem.name}</option>
              ))}
            </select>
          </div>

          {selectedSemester && (
            <ul className="space-y-2">
              {filteredSubjects.map(sub => (
                <li key={sub.id} className="flex justify-between items-center">
                  <span>{sub.name}</span>
                  <a href={sub.url} className="text-orange-500">Download</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}