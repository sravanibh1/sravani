import React from 'react';
import { Menu, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center">
              <a href="#home" className="px-3 py-2 hover:text-blue-600">Home</a>
              <a href="#about" className="px-3 py-2 hover:text-blue-600">About</a>
              <a href="#projects" className="px-3 py-2 hover:text-blue-600">Projects</a>
              <a href="#contact" className="px-3 py-2 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-50">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-50">About</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-50">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600"><Github /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Mail /></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              With 5 years of experience building scalable applications, I focus on creating
              efficient and user-friendly solutions.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="font-bold mb-4">Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>TypeScript</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Education</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>B.S. Computer Science</li>
                  <li>University of Technology</li>
                  <li>2015 - 2019</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">A full-featured e-commerce platform built with React and Node.js</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">A data visualization dashboard with interactive charts and reports</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;