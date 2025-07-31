// Contact.jsx
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <a 
        href="mailto:karim96radwan@gmail.com"
        className="bg-blue-600 text-white py-2 px-6 rounded-full shadow hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </div>
  );
}
