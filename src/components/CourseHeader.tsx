import React from "react";
import { Button } from "@/components/Button";
import { Plus, Filter } from "react-iconly";
import SearchInput from "@/components/SearchInput";

function CourseHeader() {
  return (
    <div className={"block md:flex items-center py-5 justify-between"}>
      <div className={"flex h-10 gap-x-3"}>
        <SearchInput />
        <Button variant={"outline"}>Filter <Filter set="light" primaryColor="#0ba8e0" style={styles.iconStyle2} /></Button>
      </div>
      <Button className={"h-10 mt-5 md:mt-1 hidden md:flex"}><Plus set="light" primaryColor="#fff" style={styles.iconStyle} /> Upload Lesson</Button>
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
