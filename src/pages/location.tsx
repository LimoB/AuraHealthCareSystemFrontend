
import { FaLocationDot } from 'react-icons/fa6';
import location from '../assets/Screenshot 2025-07-09 002150.png'

const Location = () => {
//     const googleMapsApiKey = 'YOUR_Maps_API_KEY';
//     const latitude = 59.334591;
//     const longitude = 18.063240;
//     const placeName = 'Aura Healthcare - Nothern Harmton';

//     const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${latitude},${longitude}&zoom=15`;

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center"> {/* Added flex justify-center here */}
            {/* This div applies the max-width and centers itself within the flex container above */}
            <div className="max-w-7xl w-full"> {/* mx-auto is not needed here if parent is flex justify-center */}
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-green-600">
                    <FaLocationDot className="inline-block align-middle mr-3 text-emerald-500" size="36" />
                    Find Our Locations
                </h1>

                {/* This is the grid container for your map and contact info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch p-4 lg:p-8 rounded-lg shadow-xl bg-gray-50">
                    {/* Left side: Google Map */}
                    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img 
                        src={location}
                        alt='Aura Healthcare location'
                         className="w-full h-full object-cover" // Tailwind classes to make the image cover the div
                        />
                        {/* <iframe
                            title="Aura Healthcare Location"
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                    </div>

                    {/* Right side: Contact Information */}
                    <div className="bg-gradient-to-br from-emerald-50 to-lime-50 p-8 rounded-lg shadow-md flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-300 pb-3">
                           Our Locations
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Primary Location:</h3>
                            <p className="text-lg text-gray-600">
                                <strong className="text-gray-800">Aura Healthcare,</strong><br />
                                Nothern Harmton 60,<br />
                                8th floor,<br />
                                Stokholm 111
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone:</h3>
                            <p className="text-lg text-gray-600">0111365378</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Email:</h3>
                            <p className="text-lg text-gray-600">aurahealth@mail.com</p>
                        </div>

                        <div className="mt-8">
                            <a
                            href="#"
                                // href={`https://www.google.com/maps/search/?api=1&query=...${latitude},${longitude}`}
                                // target="_blank"
                                // rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                            >
                                Get Directions on Google Maps
                                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;