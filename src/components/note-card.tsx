export function NoteCard() {
  return (
    <button
      className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative 
      hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis
        ducimus ut labore velit enim aspernatur minima debitis voluptatibus
        repudiandae libero, nobis, animi, voluptatum rerum assumenda eum
        repellendus nisi numquam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione quo molestiae in, dolorum dolore repellendus
        optio doloremque at, deleniti fugit magni dolor similique harum cumque.
        Dolorem quas id doloremque pariatur?
      </p>

      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 
      pointer-events-none"
      />
    </button>
  );
}
