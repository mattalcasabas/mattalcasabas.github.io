import Link from "next/link";

export default function Home() {
    return (
        <main className = "flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
            <h1 className = "text-4x1 font-bold">Hi, I'm Matt!</h1>
            <p className = "text-gray-400 mt-2">Welcome to my website! there's supposed to be code here or some shit idfk</p>
            <nav className = "mt-6 space-x-4">
                <Link href = "/projects" className = "px-4 py-2 bg-blue-500 rounded-lg">Projects</Link>
                <Link href = "/contact" className = "px-4 py-2 bg-blue-500 rounded-lg">Contact</Link>
            </nav>
        </main>
    );
}