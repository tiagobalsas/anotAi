export function NoteCard() {
  return (
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
  );
}
