import { useState } from "react";
import { Menu } from "lucide-react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-green-200 min-h-screen text-black">
      {/* Header */}
      <header className="bg-green-500 p-4 flex justify-between items-center border-b-2 border-black">
        <h1 className="text-3xl font-bold">BioSyn</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          <Menu size={32} />
        </button>
      </header>

      {/* About section */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">our story</h2>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis habitasse
          parturient nam id convallis tristique posuere. Facilisi consectetur
          suspendisse magna congue litora; hendrerit dolor placerat.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Id dolor sit in sed elementum leo; vehicula nunc. Mi augue eget sodales
          aliquet sodales accumsan magnis. Rutrum fringilla hendrerit sem ligula.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Fringilla sociosqu primis nascetur fermentum facilisis mauris. Praesent
          ut ridiculus malesuada risus velit nisi at.
        </p>
      </section>
    </div>
  );
}
