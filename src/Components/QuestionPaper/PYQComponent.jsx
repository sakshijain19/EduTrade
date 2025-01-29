/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { FiDownload, FiSearch } from 'react-icons/fi'

// Mock data for demonstration
const questionPapers = [
  { id: 1, name: "Data Structures 2024", url: "#" },
  { id: 2, name: "Algorithms 2024", url: "#" },
  { id: 3, name: "Advance Java 2023", url: "#" },
  { id: 4, name: "C Programming 2022", url: "#" },
  { id: 5, name: "Database Management Systems 2024", url: "#" },
]

const individualQuestions = [
  { id: 1, question: "What is the time complexity of quicksort?", subject: "Algorithms" },
  { id: 2, question: "Explain the concept of inheritance in OOP.", subject: "Object-Oriented Programming" },
  { id: 3, question: "What is normalization in database design?", subject: "Database Management Systems" },
  { id: 4, question: "What are Classes and Objects?", subject: "Object Oriented Programming " },
]

export default function PYQComponent() {
  const [activeTab, setActiveTab] = useState('papers')
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPapers = questionPapers.filter(paper => 
    paper.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredQuestions = individualQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Previous Year Questions (PYQ)</h1>
          
          {/* Search Input */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search by subject, topic, or year"
              className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Buttons */}
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 text-sm sm:text-base ${activeTab === 'papers' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('papers')}
            >
              Question Papers
            </button>
            <button
              className={`flex-1 py-2 text-sm sm:text-base ${activeTab === 'questions' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('questions')}
            >
              Individual Questions
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'papers' && (
            <ul className="space-y-2">
              {filteredPapers.map(paper => (
                <li key={paper.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 bg-gray-100 rounded">
                  <span className="mb-2 sm:mb-0">{paper.name}</span>
                  <a
                    href={paper.url}
                    download
                    className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                  >
                    <FiDownload className="mr-1" />
                    Download
                  </a>
                </li>
              ))}
            </ul>
          )}
          {activeTab === 'questions' && (
            <ul className="space-y-2">
              {filteredQuestions.map(q => (
                <li key={q.id} className="p-2 bg-gray-100 rounded">
                  <p className="font-medium text-sm sm:text-base">{q.question}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Subject: {q.subject}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}