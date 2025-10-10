import Logo from "@/components/common/Logo";
import Nav from "@/components/common/Nav";

function Header() {
  return (
    <header className="bg-brand-primary rounded-pill">
      <div className="relative flex justify-between items-center py-medium px-3xl">
        <Logo variant="primary" />

        <Nav />
      </div>
    </header>
  );
}

export default Header;
