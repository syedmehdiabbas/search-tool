import React from "react";
import { useState } from "react";
import useStore from "../store";

import { Box, HStack, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import SubredditInput from "./components/SubredditInput";
import Websites from "./components/Websites";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import Select from "./../components/Select";
import fileTypes from "./../data/fileTypes";
import {dateInputOptions} from "./components/dateInputOptions";

function Home({ searchEngine }) {
  const websitesData = useStore((state) => state.websites);

  const [input, setInput] = useState("");
  const [subName, setSubName] = useState("");
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedWebsite, setSelectedWebsite] = useState("");

  function handleWebsiteClick(e) {
    if (e.target.name === selectedWebsite) {
      setSelectedWebsite("");
      return;
    }
    setSelectedWebsite(e.target.name);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleFileSelect = (option) => {
    setSelectedFileType(option);
  };
  const handleYearSelect = (option) => {
    setSelectedYear(option);
  };

  const getInitialQuery = () => {
    const searchParam = searchEngine === "google" ? "search?" : "?";
    return `https://${searchEngine}.com/${searchParam}q=${input}`;
  };

  const getAddedSite = () => {
    let res = "";
    if (selectedWebsite) {
      let siteAddress = websitesData[selectedWebsite].address;
      const isReddit = selectedWebsite?.toLowerCase() === "reddit";
      if (isReddit && subName)
        siteAddress = `${websitesData[selectedWebsite].address}/r/${subName}`;
      res = `site:${siteAddress}`;
    }
    return res;
  };

  const getFileType = () => {
    if (selectedFileType) return `filetype:${selectedFileType.value} `;
    return "";
  };
  const getYear = () => {
    if (selectedYear) return selectedYear.value;
    return "";
  };

  const resetSearch = () => {
    setSelectedFileType(null);
    setSelectedYear(0);
    setSelectedWebsite("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = `${getInitialQuery()} ${getAddedSite()} ${getFileType()}${getYear()}`;
    window.open(query);
    resetSearch();
  };

  const fileTypesOptions = fileTypes.map(f => ({ value: f, label: f}));

  const isRedditSelected = selectedWebsite === "reddit";

  return (
    <form onSubmit={handleSearch}>
      <VStack
        alignItems="center"
        spacing={[10, 12, 16]}
        maxW="3xl"
        mx="auto"
        px={2}
      >
        <Header />

        <VStack spacing={6}>
          <SearchInput input={input} handleInput={handleInput} />
          <HStack justify="space-between" gap={3}>
            <Select
              value={selectedFileType}
              handleSelect={handleFileSelect}
              options={fileTypesOptions}
              placeholder="File Type"
            />

            <Select
              value={selectedYear}
              handleSelect={handleYearSelect}
              options={dateInputOptions}
              placeholder="Time"
            />
          </HStack>
        </VStack>

        <VStack spacing={6} align="center">
          <Websites
            selectedWebsite={selectedWebsite}
            handleWebsiteClick={handleWebsiteClick}
          />
          <Box minH="34px">
            {isRedditSelected ? (
              <SubredditInput
                value={subName}
                setName={setSubName}
                autoFocus={isRedditSelected}
              />
            ) : null}
          </Box>
        </VStack>

        <SearchButton isDisabled={input === ""} />
      </VStack>
    </form>
  );
}

export default Home;
