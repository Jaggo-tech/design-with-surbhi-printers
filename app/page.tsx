export default function Home() {
  return (
    <main>
      <section className="bg-black text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">
            Design With Surbhi Printers
          </h1>

          <p className="text-2xl mb-6">
            Professional Graphic Design & Printing Solutions
          </p>

          <p className="max-w-3xl text-gray-300 mb-8">
            25+ Years of Experience in Logo Design, Business Cards,
            Wedding Cards, Invitation Cards, Posters, Flyers,
            Brochures and Premium Printing Services.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
              View Designs
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}