export default function AppButton ({ title }: { title: string }) {
  return (
    <button
        type="submit"
        className="mt-6 w-full py-2 rounded-md text-white bg-teal-500 hover:bg-teal-700 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-[1.5px] focus:ring-teal-500"
        aria-label='Submit the form'
      >
        {title}
      </button>
  )
}
