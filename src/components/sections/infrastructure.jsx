import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function infrastructure() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    {
      title: "Building Tomorrow's Foundation",
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
      endingText: 'Transforming visions into reality, one foundation at a time.',
    },
    {
      title: 'Innovative Design Solutions',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069',
      text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      endingText: 'Where innovation meets excellence in design.',
    },
    {
      title: 'Sustainable Development',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      endingText: 'Building for today while preserving tomorrow.',
    },
    {
      title: 'Quality Assurance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos.',
      endingText: 'Excellence is not an act, but a habit in our quality standards.',
    },
    {
      title: 'Future-Ready Infrastructure',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069',
      text: 'Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
      endingText: 'Preparing today for the challenges of tomorrow.',
    },
  ];

  const rooms = [
    {
      title: 'Dance Room',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2070',
      description: 'Dance is a form of performing art and is blended in various activities of school curriculum.',
      color: 'bg-red-100',
      textColor: 'text-red-500',
    },
    {
      title: 'Music Room',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2070',
      description: 'Music leads to better brain development and even lowers stress levels.',
      color: 'bg-blue-100',
      textColor: 'text-blue-500',
    },
    {
      title: 'Yoga Room',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=2070',
      description: 'Yoga helps to improve memory function, academic performance, reduces stress level and helps in overall development of students.',
      color: 'bg-orange-100',
      textColor: 'text-orange-500',
    },
    {
      title: 'Art & Craft Room',
      image: 'https://images.unsplash.com/photo-1499892477393-f675706cbe6e?auto=format&fit=crop&q=80&w=2070',
      description: 'Art and Craft activities are integrated with the main subjects to develop the creativity and imaginated power of the students.',
      color: 'bg-green-100',
      textColor: 'text-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">Infrastructure</h1>
          <p className="text-xl text-center max-w-3xl text-white">
            You'll love the reliability and flexibility, and your child will love
            our proven early education curriculum and fun, safe, secure
            environment.
          </p>
        </div>

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 mb-16`}
          >
            <div className="lg:w-1/2">
              <img
                src={section.image}
                alt={`Section ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{section.text}</p>
              <p className="text-lg font-semibold text-gray-800 italic">{section.endingText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rooms Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Rooms</h2>
          <p className="text-xl text-center text-gray-600 mb-16">dedicated to extra curricular learning.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${room.color} rounded-3xl p-6 transition-transform hover:scale-105`}
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${room.textColor}`}>
                  {room.title}
                </h3>
                <p className="text-gray-700">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default infrastructure;