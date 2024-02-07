import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-800 px-4 py-3">
            <Link href={"/"} className="text-white font-bold text-lg">CRUD</Link>
            <Link href={"/addTopic"} className="bg-gray-500 px-3 py-2 rounded-md text-white">Add Topic</Link>
        </nav>
    )

}