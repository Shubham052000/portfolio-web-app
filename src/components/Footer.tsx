const Footer = () => {
  return (
    <footer className="pb-16 text-center">
      <p className="text-xs md:text-base">
        Built by <span className="font-semibold text-accented-high">Shubham Satyawali</span> Design inspired from{" "}
        <a
          className="group text-accented-high transition-all duration-300 ease-in-out"
          href="https://github.com/bchiang7/v4"
          target="_blank"
        >
          <span className="bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_1px]">
            Brittany Chiang
          </span>
        </a>
      </p>
    </footer>
  )
}

export default Footer
