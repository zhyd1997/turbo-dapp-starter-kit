import {ModeToggle} from "@/components/mode-toggle";

export const NavBar = () => {
    return (
        <nav className="border-b">
                <div className="container flex items-center justify-between h-16 pl-10">
                    <div className="font-semibold">Turbo DApp Starter Kit</div>

                    <ModeToggle />
                </div>
            </nav>
    )
}
