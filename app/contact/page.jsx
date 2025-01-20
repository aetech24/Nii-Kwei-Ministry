import Hero from '@/public/ContactBack.png';
import Image from 'next/image';
import Location from '@/public/Location_Icon.png';
import Clock from '@/public/Clock.png';
import Email from '@/public/Email.png';
import Call from '@/public/Call.png'


const page = () => {
  return (
    <div>
      <div className="md:h-[60vh] h-[70vw] flex items-center justify-center w-full relative font-sans">
        <Image
          src={Hero}
          alt="hero section for about page"
          className="bg-cover bg-center absolute w-full h-700"
        />
        <div className="absolute inset-0 flex items-center justify-start pl-0 ml-40">
          <div
            className="text-white flex flex-col items-start"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold relative pb-1">
              Contact Us
              <span className="absolute left-0 bottom-0 w-[50%] h-1 bg-violet-500"></span>
            </h1>
            <p className="md:text-xl mt-4">
              We'd love to hear from you! Reach out for inquiries, prayer
              requests, or to get involved.
            </p>
          </div>
        </div>
      </div>


      <div className="py-10 px-4 lg:px-32 mt-20">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Send Us a Message
          <div className="w-16 h-1 bg-violet-500 mt-2"></div>
        </h2>

        {/* Contact Form */}
        <form className="mt-8 space-y-6 border border-gray-300 rounded-lg p-10">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+233 123 456 789"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/*LOCATION HERE*/}


      <div className="container mx-auto my-16 text-left p-20">
      <h2 className="text-3xl font-bold mb-4 relative">
        Our Location
        <span className="absolute left-0 bottom-0 w-[10%] h-1 bg-violet-500"></span>
      </h2>
      <p className="mb-8 flex"> <Image src={Location} alt='LocationIcon' className='w-5' />123 Faith Avenue, Accra, Ghana</p>
      <div className="relative w-full h-64 md:h-96 mb-40">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.963938407878!2d-0.19222268467843605!3d5.603722696218088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfc7e1eaa7d4b5%3A0x35e5a74e3c4f7793!2sKofi%20Kuma%20to%20Kofi%20Kuma%20Ministry!5e0!3m2!1sen!2sgh!4v1630246465454!5m2!1sen!2sgh"
          className="w-full h-full border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      {/* <div className="mt-4">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=123+Faith+Avenue,+Accra,+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Directions
        </a>
      </div> */}
   



    {/*THE CONTACT INFORMATION SECTION */}

    
    <h2 className="text-3xl font-bold mb-4 relative">
        Contact Information
        <span className="absolute left-0 bottom-0 w-[10%] h-1 bg-violet-500"></span>
      </h2>

    <div className="container mx-auto my-16 p-6 bg-white rounded-lg shadow-lg border border-gray-300 mt-10">
    
      <div className="flex flex-col items-left space-y-4">
        <div className="flex items-left">
          <Image src={Call} className="w-6 h-6 mr-2" />
          <span className="text-lg">+233 123 456 789</span>
        </div>
        <div className="flex items-left">
          <Image src={Email} alt="Email" className="w-6 h-6 mr-2" />
          <span className="text-lg">info@niikweiministries.org</span>
        </div>
        <div className="flex items-left">
          <Image src={Clock} alt="Hours" className="w-6 h-6 mr-2" />
          <span className="text-lg">Monday - Friday, 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  
  

    </div>




    </div>
  );
}

export default page