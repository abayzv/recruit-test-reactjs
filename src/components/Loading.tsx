import loading from '../assets/images/loading.svg'

export default function Loading({ className }: { className?: string }) {
    return (
        <div className={`min-h-[300px] bg-gray-800 flex items-center justify-center ${className}`}>
            <div>
                <img src={loading} alt="loading" className='w-28' />
            </div>
        </div>
    )
}