import Image from 'next/image'
export default function Card() {
    return (
        <div className="bg-white shadow-lg rounded-md p-3">
            <Image src="/images/pizza-min.png" width="200" height="200"/>
            <div className="py-2">
                <div className="flex justify-between">
                    <span>Recipe Title</span>
                    <span>8.5</span>
                </div>
                <div className="flex justify-between">
                    <span>Recipe Title</span>
                    <span>8.5</span>
                </div>
            </div>
        </div>
    )
}
