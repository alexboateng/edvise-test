import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { MobileNavigation } from "./MobileNavigation";
import { Routes } from "@/lib/constants";
import UserCard from "@/components/userCard";

function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {Routes.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  <div className={"flex items-center space-x-2"}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <UserCard
              name={"Annabel Rohan"}
              role={"Super Admin User"}
              profileUrl={
                "https://images.unsplash.com/photo-1675154092378-1ca4978ec6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"
              }
            />
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
