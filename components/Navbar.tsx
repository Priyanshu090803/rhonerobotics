// "use client";

// import Link from "next/link";

// const Navbar = () => {
//   const navLinks = [
//     { name: "Services", href: "#services" },
//     { name: "Process", href: "#process" },
//     { name: "Pricing", href: "#pricing" },
//     { name: "FAQ", href: "#faq" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">

//       <div className="flex items-center justify-between rounded-2xl border bg-white/70   backdrop-blur-sm backdrop-saturate-150 shadow-lg px-4 py-2">

//         <Link href="/" className="text-xl font-bold dark:text-white hover:opacity-80 transition-opacity capitalize border px-2 py-1 rounded-lg -rotate-12 text-black bg-neutral-100/20">
//           R-R
//         </Link>

//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="text-sm font-medium text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors border border-transparent px-4 py-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <Link
//           href="#get-template"
//           className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity项目-nowrap"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import {
  Nav,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Nav className="fixed top-0 left-0 right-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">

              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Nav>

      {/* Navbar */}
    </div>
  );
}