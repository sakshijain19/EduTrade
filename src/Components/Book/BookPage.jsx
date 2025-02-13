/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Search, MapPin, IndianRupee, ArrowLeft, Send } from 'lucide-react';
import { Input } from '../BookCompo/Input/Input';
import { Button } from '../BookCompo/Button/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../BookCompo/Select/Select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../BookCompo/Card/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../BookCompo/Tabs/Tabs';

const mockBooks = [
  { id: 1, title: "C++ Programming", author: "F. Scott Fitzgerald", price: 499, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", upiId: "9780446310789", description: "A comprehensive guide to C++ programming." },
  { id: 2, title: "Advance Java", author: "Harper Lee", price: 299, image: "/placeholder.svg", location: "Mumbai", edition: "Second Edition", language: "English", upiId: "9780060935467", description: "An in-depth look at advanced Java concepts." },
  { id: 3, title: "Python", author: "George Orwell", price: 426, image: "/placeholder.svg", location: "Pune", edition: "Third Edition", language: "English", upiId: "9780451524935", description: "Learn Python programming from basics to advanced topics." },
  { id: 4, title: "Data Structure", author: "John Doe", price: 750, image: "/placeholder.svg", location: "Nashik", edition: "First Edition", language: "English", upiId: "9780131103627", description: "Explore various data structures and their implementations." }
];

const BooksPage = () => {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("browse");
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [sellFormData, setSellFormData] = useState({
    bookImage: null,
    bookTitle: '',
    author: '',
    condition: '',
    language: '',
    upiId: '',
    mobileNumber: '+91',
    price: '',
    location: '',
    edition: '',
    pages: '',
    description: ''
  });

  const handleSellFormChange = (e) => {
    const { name, value } = e.target;
    
    // Add validation for author field
    if (name === 'author') {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        alert('Author name should contain only alphabets');
        return;
      }
    }
    setSellFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    setSellFormData(prevState => ({
      ...prevState,
      bookImage: file
    }));
  };

  const handleSellFormSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      'bookImage', 'bookTitle', 'author', 'condition', 
      'language', 'upiId', 'mobileNumber', 'price', 
      'location', 'pages'
    ];

    for (const field of requiredFields) {
      if (!sellFormData[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
        return;
      }
    }

    console.log('Selling book:', sellFormData);
    alert('Book listed for sale successfully!');
  };

  const filteredBooks = mockBooks.filter((book) => {
    const matchesLocation = book.location.toLowerCase().includes(location.toLowerCase());
    const matchesSearchQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriceRange = !priceRange || (
      priceRange === "500+" ? book.price >= 500 :
      book.price >= parseInt(priceRange.split('-')[0]) && book.price <= parseInt(priceRange.split('-')[1])
    );

    return matchesLocation && matchesSearchQuery && matchesPriceRange;
  });

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
                />
              </div>
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search for books"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-200">₹100 - ₹200</SelectItem>
                  <SelectItem value="200-300">₹200 - ₹300</SelectItem>
                  <SelectItem value="300-400">₹300 - ₹400</SelectItem>
                  <SelectItem value="400-500">₹400 - ₹500</SelectItem>
                  <SelectItem value="500-600">₹500 - ₹600</SelectItem>
                  <SelectItem value="600-700">₹600 - ₹700</SelectItem>
                  <SelectItem value="700-800">₹700 - ₹800</SelectItem>
                  <SelectItem value="800-900">₹800 - ₹900</SelectItem>
                  <SelectItem value="900-1000">₹900 - ₹1000</SelectItem>
                  <SelectItem value="1000+">₹1000+</SelectItem>
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
                        <CardTitle>{book.title}</CardTitle>
                        <CardDescription>{book.author}</CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-blue-900">Sell Your Book</CardTitle>
                  <CardDescription>Fill in the details of your book</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSellFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Book Image</label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Book Title</label>
                      <Input
                        name="bookTitle"
                        value={sellFormData.bookTitle}
                        onChange={handleSellFormChange}
                        placeholder="Enter book title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Author</label>
                      <Input
                        name="author"
                        value={sellFormData.author}
                        onChange={handleSellFormChange}
                        placeholder="Enter author name"
                        pattern="[A-Za-z\s]+"
                        title="Please enter only alphabets"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Condition</label>
                      <Select
                        value={sellFormData.condition}
                        onValueChange={(value) => handleSellFormChange({ target: { name: 'condition', value } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select book condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Average</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Language</label>
                      <Input
                        name="language"
                        value={sellFormData.language}
                        onChange={handleSellFormChange}
                        placeholder="Enter book language"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">UPI ID</label>
                      <Input
                        name="upiId"
                        value={sellFormData.upiId}
                        onChange={handleSellFormChange}
                        placeholder="Enter UPI ID (must end with @ybl)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Mobile Number</label>
                      <Input
                        name="mobileNumber"
                        value={sellFormData.mobileNumber}
                        onChange={handleSellFormChange}
                        placeholder="+91"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Price</label>
                      <Input
                        name="price"
                        type="number"
                        value={sellFormData.price}
                        onChange={handleSellFormChange}
                        placeholder="Enter price"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Your Location</label>
                      {/* Placeholder for Map Component */}
                      <Input
                        name="location"
                        value={sellFormData.location}
                        onChange={handleSellFormChange}
                        placeholder="Enter your location"
                      />
                      {/* You can replace the above Input with a Map component for location selection */}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Edition</label>
                      <Input
                        name="edition"
                        value={sellFormData.edition}
                        onChange={handleSellFormChange}
                        placeholder="Enter book edition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Pages</label>
                      <Input
                        name="pages"
                        type="number"
                        value={sellFormData.pages}
                        onChange={handleSellFormChange}
                        placeholder="Enter number of pages"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Book Description</label>
                      <textarea
                        name="description"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
                        placeholder="Book Description"
                        rows={4}
                        value={sellFormData.description}
                        onChange={handleSellFormChange}
                      ></textarea>
                    </div>

                    <Button type="submit"
                      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-blue hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      List Book for Sale
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}

      {selectedBook && (
        <div className="mt-8">
          <Button onClick={handleBackClick} className="mb-4 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Books
          </Button>
          <Card>
            <CardHeader>
              <CardTitle>{selectedBook.title}</CardTitle>
              <CardDescription>{selectedBook.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-64 object-cover mb-4" />
              <p className="flex items-center text-gray-700 mb-2"><MapPin className="w-4 h-4 mr-2" /> {selectedBook.location}</p>
              <p className="flex items-center text-gray-700 mb-2"><IndianRupee className="w-4 h-4 mr-2" /> ₹{selectedBook.price}</p>
              <p className="text-gray-700 mb-2"><strong>Edition:</strong> {selectedBook.edition}</p>
              <p className="text-gray-700 mb-2"><strong>Language:</strong> {selectedBook.language}</p>
              <p className="text-gray-700 mb-2"><strong>upiId:</strong> {selectedBook.upiId}</p>
              <p className="text-gray-700 mb-4"><strong>Description:</strong> {selectedBook.description}</p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Contact Seller</h3>
                <div>
                  <label className="block text-sm font-medium mb-1">Mobile Number</label>
                  <Input
                    name="mobileNumber"
                    value={sellFormData.mobileNumber}
                    onChange={handleSellFormChange}
                    placeholder="+91"
                  />
                </div>
                <Button onClick={handleSendMessage} className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BooksPage;