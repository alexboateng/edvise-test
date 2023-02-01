
import { Search } from "react-iconly";

export default function SearchInput() {
  return (
    <div>
      <div className="flex justify-center content-center w-full h-10 rounded-md border-gray-300 border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search style={styles.iconStyles} />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

const styles = {
  iconStyles: {
    width: "1.2rem",
    color: "#ABAFB8"
  },
};