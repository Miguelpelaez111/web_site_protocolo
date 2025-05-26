import React from 'react';
import { FileText, Users, Calendar } from 'lucide-react';

function App() {
  const handleDownload = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black/90 py-4">
        <div className="container mx-auto px-4">
          <img src="logool.png" alt="Opción Legal" className="h-16 mx-auto" />
        </div>
      </header>

      <div className="title-banner bg-[#008EB3] py-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold px-4">
          Encuentro programa de empoderamiento comunitario y fortalecimiento a estructuras organizativas
        </h1>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Thursday Section */}
        <section className="mb-12">
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Día Jueves 28 de noviembre
            </h2>
            <h3 className="text-xl text-gray-600 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Actividad
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="card"
                  onClick={() => handleDownload(`/docs/thursday/doc${i + 1}.pdf`)}
                >
                  <div className="img">
                    <FileText className="w-6 h-6 m-3 text-white" />
                  </div>
                  <div className="textBox">
                    <div className="textContent">
                      <p className="h1">Documento {i + 1}</p>
                      <span className="span">Archivo disponible</span>
                    </div>
                    <p className="p">Click para descargar PDF</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Friday Section */}
        <section>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Viernes 29 de noviembre
            </h2>
            <h3 className="text-xl text-gray-600 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Actividades
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className="card"
                  onClick={() => handleDownload(`/docs/friday/doc${i + 1}.pdf`)}
                >
                  <div className="img">
                    <FileText className="w-6 h-6 m-3 text-white" />
                  </div>
                  <div className="textBox">
                    <div className="textContent">
                      <p className="h1">Documento {i + 1}</p>
                      <span className="span">Archivo disponible</span>
                    </div>
                    <p className="p">Click para descargar PDF</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/90 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2 hover:text-[#008EB3] transition-colors">
              <Users className="w-4 h-4" />
              Equipo de Analítica
            </a>
          </div>
          <div className="text-sm text-gray-300 text-center md:text-right">
            <p>© 2024. Corporación Opción Legal</p>
            <p>Medellín, Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;