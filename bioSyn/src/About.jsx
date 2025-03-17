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
        Tijdens de Dutch Design Week in Eindhoven presenteren wij de tentoonstelling "Timewarp", waarin we een blik werpen op toekomstscenario’s in het jaar 2050.
        Hier verkennen we thema’s zoals wonen, reizen, klimaat en met name de productie en consumptie van voedsel. 
        Onze tentoonstelling biedt bezoekers de kans om letterlijk een stap in de toekomst te zetten en innovatieve ideeën te ontdekken.
        </p>
        <p className="text-lg leading-relaxed mt-4">
        De focus van ons project ligt op voeding in 2050. De huidige methoden van voedselproductie en -consumptie zijn niet langer houdbaar. 
        Het veranderende klimaat en het uitsterven van plant- en diersoorten maken de noodzaak voor nieuwe oplossingen steeds duidelijker. 
        Daarom onderzoeken we alternatieve manieren om aan voedingsstoffen te komen, zoals:

            - Inhaleren van voedingsstoffen via mist
            - Het nemen van één pil per dag als maaltijdvervanger
        </p>
        <p className="text-lg leading-relaxed mt-4">
        Met Timewarp willen we niet alleen inspireren, maar ook een discussie starten over de toekomst van voeding 
        en hoe wij ons als samenleving kunnen aanpassen aan een veranderende wereld.


        </p>
      </section>
    </div>
  );
}
