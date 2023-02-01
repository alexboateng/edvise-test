import React from "react";
import { Button } from "@/components/Button";
import { Plus, Filter } from "react-iconly";
import SearchInput from "@/components/SearchInput";


function FilterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6348 0.25C1.31771 0.25 0.25 1.31771 0.25 2.6348C0.25 4.98886 1.38687 7.19801 3.30244 8.56628L5.23074 9.94363C5.89641 10.4191 6.14817 10.6027 6.34727 10.8106C6.78262 11.2652 7.07659 11.8365 7.19347 12.455C7.24693 12.7378 7.25 13.0494 7.25 13.8674V19C7.25 20.5188 8.48122 21.75 10 21.75C11.5188 21.75 12.75 20.5188 12.75 19V13.8674C12.75 13.0494 12.7531 12.7378 12.8065 12.455C12.9234 11.8365 13.2174 11.2652 13.6527 10.8106C13.8518 10.6027 14.1036 10.4191 14.7693 9.94363L16.6976 8.56628C18.6131 7.19801 19.75 4.98886 19.75 2.6348C19.75 1.31771 18.6823 0.25 17.3652 0.25H2.6348ZM4.1743 7.34568C2.65292 6.25898 1.75 4.50444 1.75 2.6348C1.75 2.14614 2.14614 1.75 2.6348 1.75H17.3652C17.8539 1.75 18.25 2.14614 18.25 2.6348C18.25 4.50444 17.3471 6.25898 15.8257 7.34568L13.8974 8.72303L13.8354 8.76734C13.2525 9.18353 12.8777 9.45117 12.5694 9.77315C11.9331 10.4376 11.5034 11.2725 11.3326 12.1764C11.2498 12.6145 11.2499 13.075 11.25 13.7912V13.7912L11.25 13.8674V19C11.25 19.6904 10.6904 20.25 10 20.25C9.30964 20.25 8.75 19.6904 8.75 19V13.8674L8.75001 13.7912C8.75011 13.075 8.75017 12.6145 8.66738 12.1764C8.49655 11.2725 8.0669 10.4376 7.43062 9.77315C7.12227 9.45117 6.74747 9.18353 6.16464 8.76734L6.1026 8.72303L4.1743 7.34568Z" fill="#29BFF5"/>
    </svg>
  )
}

function AddIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.25C8.41421 0.25 8.75 0.585786 8.75 1V7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H8.75V15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15V8.75H1C0.585786 8.75 0.25 8.41421 0.25 8C0.25 7.58579 0.585786 7.25 1 7.25H7.25V1C7.25 0.585786 7.58579 0.25 8 0.25Z" fill="white"/>
</svg>
  )
}

function CourseHeader() {
  return (
    <div className={"block md:flex items-center py-5 justify-between"}>
      <div className={"flex h-10 gap-x-3 md:w-[40%]"}>
        <SearchInput />
        <Button variant={"outline"} className="gap-x-2">Filter <FilterIcon /></Button>
      </div>
      <Button className={"h-10 mt-5 md:mt-1 hidden md:flex gap-x-2"}><AddIcon /> Upload Lesson</Button>
    </div>
  );
}

const styles = {
  iconStyle: {
    marginRight: "0.5rem",
  },
  iconStyle2: {
    marginLeft: "0.5rem",
  },
};

export default CourseHeader;
