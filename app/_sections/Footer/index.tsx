const Footer = () => {
  return (
    <footer className="w-full h-36 px-4 mt-16 mb-8 flex flex-col justify-end">
      <div className="border h-36 md:h-24 border-[#A5D872] rounded-lg p-4 flex flex-wrap sm:flex-nowrap gap-4 justify-between items-center">
        <div>
          <h2 className="text-white text-center flex flex-wrap justify-center">
            Desing e desenvolvimento por
            <span className="text-[#A5D872] ml-1.5">
              Thiago de O. Nascimento
            </span>
          </h2>
        </div>
        <div>
          <h2 className="text-white text-center flex flex-wrap justify-center">
            © 2025 Thiago de Oliveira Nascimento.
            <span className="ml-1.5">Todos os direitos reservados.</span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
