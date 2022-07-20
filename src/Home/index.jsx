import React from "react";
import { useState } from "react";
import useStore from "../store";

import { Box, HStack, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import ExactCheck from "./components/ExactCheck";
import SubredditInput from "./components/SubredditInput";
import ExcludeInput from "./components/ExcludeInput";
import Websites from "./components/Websites";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import Select from "./../components/Select";
import fileTypes from "./../data/fileTypes";
import years from "./../data/years";

function Home() {
  const websitesData = useStore((state) => state.websites);
  const changeSelection = useStore((state) => state.changeSelection);

  const [input, setInput] = useState("");
  const [exactSearch, setExactSearch] = useState(false);
  const [excludeTerms, setExcludeTerms] = useState("");
  const [subName, setSubName] = useState("");
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(0);

  const allWebsites = Object.keys(websitesData);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleCheckboxChange = () => {
    setExactSearch(!exactSearch);
  };

  const handleWebsiteClick = (e) => {
    changeSelection(e.target.name);
  };

  const handleFileSelect = (option) => {
    setSelectedFileType(option);
  };
  const handleYearSelect = (option) => {
    setSelectedYear(option);
  };

  const getInitialQuery = () => {
    if (exactSearch) return `https://google.com/search?q="${input}"`;
    return `https://google.com/search?q=${input}`;
  };

  const getAddedSites = () => {
    let res = "";
    let num = 0;
    allWebsites.forEach((w) => {
      if (websitesData[w].selected) {
        let siteAddress = websitesData[w].address;
        const isReddit = websitesData[w]?.name?.toLowerCase() === "reddit";
        if (isReddit && subName)
          siteAddress = `${websitesData[w].address}/r/${subName}`;
        res = res + `${num !== 0 ? " OR " : ""}site:${siteAddress}`;
        num += 1;
      }
    });
    return res;
  };

  const getExcludedSites = () => {
    if (excludeTerms) return ` -${excludeTerms}`;
    return "";
  };

  const getFileType = () => {
    if (selectedFileType) return `filetype:${selectedFileType.value} `;
    return "";
  };
  const getYear = () => {
    if (selectedYear) return `after:${selectedYear.value}`;
    return "";
  };

  const unselectAll = () => {
    allWebsites.forEach((w) => {
      if (websitesData[w].selected === true) changeSelection(w);
    });
  };

  const resetSearch = () => {
    setInput("");
    setExactSearch(false);
    setExcludeTerms("");
    setSubName("");
    setSelectedFileType(null);
    unselectAll();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = `${getInitialQuery()} ${getAddedSites()}${getExcludedSites()} ${getFileType()}${getYear()}`;
    window.open(query);
    resetSearch();
  };

  const isRedditSelected = websitesData?.Reddit?.selected;
  const isSearchDisabled = input === "";

  return (
    <form onSubmit={handleSearch}>
      <VStack
        alignItems="center"
        spacing={[10, 12, 16]}
        maxW="2xl"
        mx="auto"
        px={2}
      >
        <Header />

        <VStack spacing={6}>
          <SearchInput input={input} handleInput={handleInput} />
          <HStack justify="space-between" gap={3}>
            <ExactCheck handleChange={handleCheckboxChange} val={exactSearch} />
            <ExcludeInput
              excludeTerms={excludeTerms}
              setExcludeTerms={setExcludeTerms}
            />
          </HStack>
          <HStack justify="space-between" gap={3}>
            <Select
              value={selectedFileType}
              handleSelect={handleFileSelect}
              data={fileTypes}
              placeholder="File Type"
            />

            <Select
              value={selectedYear}
              handleSelect={handleYearSelect}
              data={years}
              placeholder="After:"
            />
          </HStack>
        </VStack>

        <VStack spacing={6} align="center">
          <Websites handleWebsiteClick={handleWebsiteClick} />
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

        <SearchButton isDisabled={isSearchDisabled} />
      </VStack>
    </form>
  );
}

export default Home;
