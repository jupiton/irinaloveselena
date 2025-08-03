import Image from "next/image";
import AuthGuard from "./components/AuthGuard";
import LogoutButton from "./components/LogoutButton";

export default function Home() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Header */}
        <header className="text-center py-12 bg-white/80 backdrop-blur-sm shadow-sm relative">
          <LogoutButton />
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 animate-fade-in-up">
            Irina Love Elena
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A poetic journey through the love of a mother and her daughter
          </p>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold text-gray-800">
                Infinite Love
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Between a mother and her daughter, there exists a bond so deep, 
                so pure, that it transcends words. Irina and Elena share 
                this unique magic that illuminates every day of their lives.
              </p>
              <div className="flex space-x-4">
                <div className="bg-purple-100 p-4 rounded-lg card-hover">
                  <h3 className="font-semibold text-purple-800">Irina</h3>
                  <p className="text-sm text-purple-600">Strength and wisdom</p>
                </div>
                <div className="bg-pink-100 p-4 rounded-lg card-hover">
                  <h3 className="font-semibold text-pink-800">Elena</h3>
                  <p className="text-sm text-pink-600">Joy and light</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-8 h-80 flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <Image src="/images/heart.svg" alt="Heart" width={60} height={60} className="animate-pulse-slow" />
                    <Image src="/images/flower.svg" alt="Flower" width={60} height={60} className="animate-pulse-slow" />
                    <Image src="/images/star.svg" alt="Star" width={60} height={60} className="animate-pulse-slow" />
                  </div>
                  <p className="text-xl font-medium text-gray-700">
                    Mother & Daughter
                  </p>
                  <p className="text-gray-500">An eternal love</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Photos Section */}
        <section className="py-16 px-4 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
              Family Photos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image 
                    src="/images/WhatsApp Image 2025-03-31 at 23.28.24.jpeg" 
                    alt="Irina and Elena - Precious moment" 
                    width={400} 
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Precious Moment
                </h3>
                <p className="text-gray-600 text-sm">
                  A moment of shared joy between mother and daughter
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image 
                    src="/images/WhatsApp Image 2025-04-10 at 17.54.41.jpeg" 
                    alt="Irina and Elena - Memories" 
                    width={400} 
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Memories
                </h3>
                <p className="text-gray-600 text-sm">
                  Unforgettable moments engraved in our hearts
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image 
                    src="/images/WhatsApp Image 2025-05-25 at 23.35.52.jpeg" 
                    alt="Irina and Elena - Eternal love" 
                    width={400} 
                    height={300}
                    className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
                    style={{objectPosition: 'center 30%'}}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Eternal Love
                </h3>
                <p className="text-gray-600 text-sm">
                  A bond of love that transcends time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Poems Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
              Poems from the Heart
            </h2>
            
            <div className="space-y-12">
              {/* Poem 1 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                <div className="flex items-center mb-4">
                  <Image src="/images/heart.svg" alt="Heart" width={40} height={40} className="mr-3" />
                  <h3 className="text-xl font-semibold text-purple-800">
                    &ldquo;My Daughter, My Star&rdquo;
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 poem-text">
                  <p>
                    In your eyes, I see the future<br/>
                    A smile that makes everything bloom<br/>
                    Elena, my little light<br/>
                    You are my joy, my first pride
                  </p>
                  <p>
                    Every day with you is a gift<br/>
                    A precious moment, a new painting<br/>
                    Of our love, so pure, so true<br/>
                    That grows even more each day
                  </p>
                </div>
                <p className="text-sm text-purple-600 mt-4 italic">- Irina</p>
              </div>

              {/* Poem 2 */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                <div className="flex items-center mb-4">
                  <Image src="/images/flower.svg" alt="Flower" width={40} height={40} className="mr-3" />
                  <h3 className="text-xl font-semibold text-pink-800">
                    &ldquo;Mama, My Angel&rdquo;
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 poem-text">
                  <p>
                    Mama, you are my guide, my rock<br/>
                    In your arms, I feel safe<br/>
                    Your love protects me, consoles me<br/>
                    You are my strength, my eternal light
                  </p>
                  <p>
                    With you, I grow, I learn<br/>
                    Every life lesson is a treasure<br/>
                    Thank you for everything you give me<br/>
                    For this infinite love that surrounds me
                  </p>
                </div>
                <p className="text-sm text-pink-600 mt-4 italic">- Elena</p>
              </div>

              {/* Poem 3 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm card-hover animate-fade-in-up" style={{animationDelay: '1.8s'}}>
                <div className="flex items-center mb-4">
                  <Image src="/images/star.svg" alt="Star" width={40} height={40} className="mr-3" />
                  <h3 className="text-xl font-semibold text-blue-800">
                    &ldquo;Our Eternal Bond&rdquo;
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 poem-text">
                  <p>
                    Between a mother and her daughter<br/>
                    There exists an invisible bond<br/>
                    That traverses time and space<br/>
                    A love that never fades
                  </p>
                  <p>
                    Irina and Elena, united forever<br/>
                    In joy, in trials<br/>
                    Their love shines like a star<br/>
                    Illuminating their path of life
                  </p>
                </div>
                <p className="text-sm text-blue-600 mt-4 italic">- For Irina & Elena</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
              Precious Moments
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center card-hover animate-fade-in-up" style={{animationDelay: '2s'}}>
                <div className="mb-4">
                  <Image src="/images/heart.svg" alt="Love" width={60} height={60} className="animate-pulse-slow mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Maternal Love
                </h3>
                <p className="text-gray-600">
                  An unconditional love that grows each day
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center card-hover animate-fade-in-up" style={{animationDelay: '2.2s'}}>
                <div className="mb-4">
                  <Image src="/images/star.svg" alt="Joy" width={60} height={60} className="animate-pulse-slow mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Shared Joy
                </h3>
                <p className="text-gray-600">
                  Moments of happiness and complicity
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center card-hover animate-fade-in-up" style={{animationDelay: '2.4s'}}>
                <div className="mb-4">
                  <Image src="/images/flower.svg" alt="Future" width={60} height={60} className="animate-pulse-slow mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Future Together
                </h3>
                <p className="text-gray-600">
                  A path traced hand in hand
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in-up">
              Irina Love Elena
            </h3>
            <p className="text-lg opacity-90 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A love that transcends time
            </p>
            <div className="flex justify-center space-x-8 text-sm opacity-75 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <span>💕 Love</span>
              <span>🌟 Joy</span>
              <span>🌹 Beauty</span>
              <span>✨ Magic</span>
            </div>
          </div>
        </footer>
      </div>
    </AuthGuard>
  );
}
