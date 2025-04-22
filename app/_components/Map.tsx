const Map = () => {
    return ( 
        <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25350.17307738798!2d-53.62995893143962!3d-28.64154612766963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd962af931d469%3A0xfca029b2de6a7c51!2sCruz%20Alta%2C%20RS!5e1!3m2!1spt-BR!2sbr!4v1745327737043!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização ADL Comércio de Cereais"
        ></iframe>
        <div className="absolute top-4 left-4 bg-[#1E3B39] p-4 rounded-lg shadow-lg">
          <h3 className="text-white font-bold mb-2">ADL Comércio de Cereais</h3>
          <p className="text-[#7EBFB3] text-sm">Cruz Alta - RS</p>
        </div>
      </section>
     );
}
 
export default Map;