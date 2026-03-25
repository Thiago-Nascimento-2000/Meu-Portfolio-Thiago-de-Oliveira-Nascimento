const Footer = () => {
  return (
    <footer className="w-screen p-6 h-37.5 flex justify-center">
      <div className="border border-[#A5D872] rounded-lg w-347 h-27.5 flex flex-col md:flex-row p-2 justify-between px-12 items-center">
        <div>
          <h2 className="text-white flex flex-col lg:flex-row">
            Desing e desenvolvimento feito por
            <span className="text-[#A5D872] flex justify-center ml-1">
              Thiago O. Nascimento
            </span>
          </h2>
        </div>
        <div>
          <h2 className="text-white">© 2025 thiago.rydeon.com.br</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
