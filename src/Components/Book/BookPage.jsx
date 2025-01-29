
// import { useState } from 'react';
// import { Search, MapPin, IndianRupee } from 'lucide-react';
// import { Input } from '../BookCompo/Input/Input';
// import { Button } from '../BookCompo/Button/Button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../BookCompo/Select/Select';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../BookCompo/Card/Card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../BookCompo/Tabs/Tabs';

// const mockBooks = [
//   { id: 1, title: "C++ Programming", author: "F. Scott Fitzgerald", price: 499, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", isbn: "9780446310789" },
//   { id: 2, title: "Advance Java", author: "Harper Lee", price: 299, image: "/placeholder.svg", location: "Mumbai", edition: "Second Edition", language: "English", isbn: "9780060935467" },
//   { id: 3, title: "Python", author: "George Orwell", price: 426, image: "/placeholder.svg", location: "Pune", edition: "Third Edition", language: "English", isbn: "9780451524935" },
//   { id: 4, title: "Data Structure", author: "John Doe", price: 750, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", isbn: "9780131103627" },
// ];

// function BooksPage() {
//   const [location, setLocation] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [transactionType, setTransactionType] = useState("buy");
//   const [activeTab, setActiveTab] = useState("browse");

//   const filteredBooks = mockBooks.filter(
//     (book) =>
//       book.location.toLowerCase().includes(location.toLowerCase()) &&
//       book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8 text-black">Books Marketplace</h1>

//       {/* Conditionally Render Search and Filter Section */}
//       {activeTab === "browse" && (
//         <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
//           <div className="w-full md:w-1/3">
//             <Input
//               type="text"
//               placeholder="Enter your location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full"
//               icon={<MapPin className="w-4 h-4" />}
//             />
//           </div>
//           <div className="w-full md:w-1/3">
//             <Input
//               type="text"
//               placeholder="Search for books"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full"
//               icon={<Search className="w-4 h-4" />}
//             />
//           </div>
//           <Select value={transactionType} onValueChange={setTransactionType}>
//             <SelectTrigger className="w-full md:w-[180px] bg-white border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-600">
//               <SelectValue placeholder="Select transaction type" />
//             </SelectTrigger>
//             <SelectContent className="bg-white shadow-md">
//               <SelectItem value="buy" className="hover:bg-gray-100">Buy</SelectItem>
//               <SelectItem value="rent" className="hover:bg-gray-100">Rent</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       )}

//       {/* Tabs Section with Highlight and Animation */}
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="flex justify-center mb-6">
//           <TabsTrigger
//             value="browse"
//             className={`px-4 py-2 rounded-md transition-all duration-300 ${
//               activeTab === 'browse' ? 'bg-gray-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800'
//             } focus:outline-none hover:bg-gray-400`}
//             onClick={() => setActiveTab("browse")}
//           >
//             Browse Books
//           </TabsTrigger>
//           <TabsTrigger
//             value="sell"
//             className={`px-4 py-2 rounded-md transition-all duration-300 ${
//               activeTab === 'sell' ? 'bg-gray-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800'
//             } focus:outline-none hover:bg-gray-400`}
//             onClick={() => setActiveTab("sell")}
//           >
//             Sell a Book
//           </TabsTrigger>
//         </TabsList>

//         {/* Browse Books */}
//         <TabsContent value="browse">
//           {filteredBooks.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredBooks.map((book) => (
//                 <Card key={book.id} className="shadow-lg">
//                   <CardHeader>
//                     <CardTitle className="text-lg font-semibold text-blue-900">{book.title}</CardTitle>
//                     <CardDescription className="text-sm text-gray-600">{book.author}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
//                     <p className="flex items-center text-gray-700"><MapPin className="w-4 h-4 mr-2" /> {book.location}</p>
//                     <p className="flex items-center text-gray-700"><IndianRupee className="w-4 h-4 mr-2" /> ₹{book.price}</p>
//                     <p className="text-gray-700"><strong>Edition:</strong> {book.edition}</p>
//                     <p className="text-gray-700"><strong>Language:</strong> {book.language}</p>
//                     <p className="text-gray-700"><strong>ISBN:</strong> {book.isbn}</p>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
//                       {transactionType === 'buy' ? 'Buy Now' : 'Rent Now'}
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-red-600 text-lg mt-14 mb-64">
//               No books found matching your search.
//             </div>
//           )}
//         </TabsContent>

//         {/* Sell a Book */}
//         <TabsContent value="sell">
//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-lg font-semibold text-blue-900">Sell Your Book</CardTitle>
//               <CardDescription className="text-sm text-gray-600">Enter the details of the book you want to sell</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-4">

//                 {/* File Upload for Additional Images */}
//                 <Input type="file" accept="image/*" />

//                 {/* Book Title Input */}
//                 <Input type="text" placeholder="Book Title" />

//                 {/* Author Input */}
//                 <Input type="text" placeholder="Author" />

//                 {/* Price Input */}
//                 <Input type="number" placeholder="Price" />

//                 {/* Location Input */}
//                 <Input type="text" placeholder="Your Location" />

//                 {/* Condition Input */}
//                 <Input type="text" placeholder="Condition (e.g., Good, New)" />

//                 {/* Edition Input */}
//                 <Input type="text" placeholder="Edition (e.g., First Edition)" />

//                 {/* Pages Input */}
//                 <Input type="number" placeholder="Pages" />

//                 {/* Language Input */}
//                 <Input type="text" placeholder="Language (e.g., English)" />

//                 {/* ISBN Input */}
//                 <Input type="text" placeholder="ISBN (e.g., 9780446310789)" />

//                 {/* Book Description Textarea */}
//                 <textarea
//                   className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
//                   placeholder="Book Description"
//                   rows={4}
//                 ></textarea>
//               </form>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
//                 List Book for Sale
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>


//       </Tabs>
//     </div>
//   );
// }

// export default BooksPage;








import { useState } from 'react';
import { Search, MapPin, IndianRupee, ArrowLeft, Send } from 'lucide-react';
import { Input } from '../BookCompo/Input/Input';
import { Button } from '../BookCompo/Button/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../BookCompo/Select/Select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../BookCompo/Card/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../BookCompo/Tabs/Tabs';

const mockBooks = [
  { id: 1, title: "C++ Programming", author: "F. Scott Fitzgerald", price: 499, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", isbn: "9780446310789", description: "A comprehensive guide to C++ programming." },
  { id: 2, title: "Advance Java", author: "Harper Lee", price: 299, image: "/placeholder.svg", location: "Mumbai", edition: "Second Edition", language: "English", isbn: "9780060935467", description: "An in-depth look at advanced Java concepts." },
  { id: 3, title: "Python", author: "George Orwell", price: 426, image: "/placeholder.svg", location: "Pune", edition: "Third Edition", language: "English", isbn: "9780451524935", description: "Learn Python programming from basics to advanced topics." },
  { id: 4, title: "Data Structure", author: "John Doe", price: 750, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", isbn: "9780131103627", description: "Explore various data structures and their implementations." },
];

function BooksPage() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionType, setTransactionType] = useState("buy");
  const [activeTab, setActiveTab] = useState("browse");
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState("");

  const filteredBooks = mockBooks.filter(
    (book) =>
      book.location.toLowerCase().includes(location.toLowerCase()) &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackClick = () => {
    setSelectedBook(null);
  };

  const handleSendMessage = () => {
    alert(`Message sent to the seller: ${message}`);
    setMessage("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Books Marketplace</h1>

      {!selectedBook && (
        <>
          {activeTab === "browse" && (
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full"
                  icon={<MapPin className="w-4 h-4" />}
                />
              </div>
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search for books"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                  icon={<Search className="w-4 h-4" />}
                />
              </div>
              <Select value={transactionType} onValueChange={setTransactionType}>
                <SelectTrigger className="w-full md:w-[180px] bg-white border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-600">
                  <SelectValue placeholder="Select transaction type" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md">
                  <SelectItem value="buy" className="hover:bg-gray-100">Buy</SelectItem>
                  <SelectItem value="rent" className="hover:bg-gray-100">Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex justify-center mb-6">
              <TabsTrigger
                value="browse"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'browse' ? 'bg-gray-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800'
                } focus:outline-none hover:bg-gray-400`}
                onClick={() => setActiveTab("browse")}
              >
                Browse Books
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'sell' ? 'bg-gray-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800'
                } focus:outline-none hover:bg-gray-400`}
                onClick={() => setActiveTab("sell")}
              >
                Sell a Book
              </TabsTrigger>
            </TabsList>

            <TabsContent value="browse">
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBooks.map((book) => (
                    <Card key={book.id} className="shadow-lg cursor-pointer" onClick={() => handleBookClick(book)}>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-900">{book.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{book.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
                        <p className="flex items-center text-gray-700"><MapPin className="w-4 h-4 mr-2" /> {book.location}</p>
                        <p className="flex items-center text-gray-700"><IndianRupee className="w-4 h-4 mr-2" /> ₹{book.price}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center text-red-600 text-lg mt-14 mb-64">
                  No books found matching your search.
                </div>
              )}
            </TabsContent>

            <TabsContent value="sell">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-blue-900">Sell Your Book</CardTitle>
                  <CardDescription className="text-sm text-gray-600">Enter the details of the book you want to sell</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="file" accept="image/*" />
                    <Input type="text" placeholder="Book Title" />
                    <Input type="text" placeholder="Author" />
                    <Input type="number" placeholder="Price" />
                    <Input type="text" placeholder="Condition (e.g., Good, New)" />
                    <Input type="text" placeholder="Edition (e.g., First Edition)" />
                    <Input type="number" placeholder="Pages" />
                    <Input type="text" placeholder="Language (e.g., English)" />
                    <Input type="text" placeholder="ISBN (e.g., 9780446310789)" />
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
                      placeholder="Book Description"
                      rows={4}
                    ></textarea>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    List Book for Sale
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}

      {selectedBook && (
        <div className="mt-8">
          <Button onClick={handleBackClick} className="mb-4 flex items-center bg-gray-200 text-gray-800 hover:bg-gray-300">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Books
          </Button>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900">{selectedBook.title}</CardTitle>
              <CardDescription className="text-lg text-gray-600">{selectedBook.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-64 object-cover mb-4" />
              <p className="flex items-center text-gray-700 mb-2"><MapPin className="w-4 h-4 mr-2" /> {selectedBook.location}</p>
              <p className="flex items-center text-gray-700 mb-2"><IndianRupee className="w-4 h-4 mr-2" /> ₹{selectedBook.price}</p>
              <p className="text-gray-700 mb-2"><strong>Edition:</strong> {selectedBook.edition}</p>
              <p className="text-gray-700 mb-2"><strong>Language:</strong> {selectedBook.language}</p>
              <p className="text-gray-700 mb-2"><strong>ISBN:</strong> {selectedBook.isbn}</p>
              <p className="text-gray-700 mb-4"><strong>Description:</strong> {selectedBook.description}</p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Contact Seller</h3>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 mb-2"
                  placeholder="Type your message here..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Button onClick={handleSendMessage} className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default BooksPage;

