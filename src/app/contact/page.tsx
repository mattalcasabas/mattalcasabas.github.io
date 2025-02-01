import Link from "next/link";

export default function Contact() {
    return (
        <main className = "flex flex-col items-cetner justify-center min-h-screen p-6 bg-gray-900 text-white">
            <h1 className = "text-4x1 font-bold">Contact</h1>
            <p className = "text-gray-400 mt-2">hit me up fine shyt</p>
            <Link href = "/" className = "mt-4 px-4 py-2 bg-gray-700 rounded-lg">Home</Link>
        </main>
    );
}