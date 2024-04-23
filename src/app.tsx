import logo from "@/assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert" />

      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Busque em suas notas"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative">
          <span className=" text-sm font-medium text-slate-200">
            Adicionar nota
          </span>

          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertido em texto automaticamente
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slat-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis
            ducimus ut labore velit enim aspernatur minima debitis voluptatibus
            repudiandae libero, nobis, animi, voluptatum rerum assumenda eum
            repellendus nisi numquam. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Delectus autem, animi officia ipsam omnis nemo,
            aliquam a facilis vel quia atque. Veritatis suscipit iure quisquam
            similique. Officia quos voluptas quisquam!
          </p>

          <div className="absolut bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slat-300">há 4 dias</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis
            ducimus ut labore velit enim aspernatur minima debitis voluptatibus
            repudiandae libero, nobis, animi, voluptatum rerum assumenda eum
            repellendus nisi numquam.
          </p>

          <div className="absolut bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slat-300">há 14 dias</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis
            ducimus ut labore velit enim aspernatur minima debitis voluptatibus
            repudiandae libero, nobis, animi, voluptatum rerum assumenda eum
            repellendus nisi numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam ex veritatis quibusdam quas eum quisquam
            laboriosam fugit perspiciatis maxime commodi odit iste itaque autem
            dolor placeat veniam, sed voluptas natus!
          </p>

          <div className="absolut bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
