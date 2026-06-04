export const Button = ({ children, onClick, theme = 'dark', type = 'button' }) => {
  const base = 'ml-4 px-4 py-2 rounded bg-surface border cursor-pointer font-medium';
  const dark = 'border-black text-black hover:bg-black hover:text-white transition';
  const light = 'border-white text-white hover:bg-white hover:text-black transition';
  const themeClass = theme === 'light' ? light : dark;

  return (
    <button className={`${base} ${themeClass}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
