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
import SelectFileType from "./components/SelectFileType";

function Home() {
  const websitesData = useStore((state) => state.websites);
  const changeSelection = useStore((state) => state.changeSelection);
  const deleteWebsite = useStore((state) => state.deleteWebsite);

  const [input, setInput] = useState("");
  const [exactSearch, setExactSearch] = useState(false);
  const [excludeTerms, setExcludeTerms] = useState("");
  const [subName, setSubName] = useState("");
  const [selectedFileType, setSelectedFileType] = useState(null);

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

  const handleWebsiteRightClick = (e) => {
    deleteWebsite(e.target.name);
    e.preventDefault();
  };

  const handleFileSelect = (option) => {
    setSelectedFileType(option);
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
    if (selectedFileType) return `filetype:${selectedFileType.value}`;
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
    const query = `${getInitialQuery()} ${getAddedSites()}${getExcludedSites()} ${getFileType()}`;
    window.open(query);
    resetSearch();
  };

  const isRedditSelected = websitesData?.reddit?.selected;
  const isSearchDisabled = input === "";

  return (
    <form onSubmit={handleSearch}>
      <VStack alignItems="center" spacing={[8, 12, 16]} pt={[8, 12, 20]}>
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
          <SelectFileType
            value={selectedFileType}
            handleSelect={handleFileSelect}
          />
        </VStack>

        <VStack spacing={6} align="center">
          <Websites
            handleWebsiteClick={handleWebsiteClick}
            handleWebsiteRightClick={handleWebsiteRightClick}
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

        <SearchButton isDisabled={isSearchDisabled} />
      </VStack>
    </form>
  );
}

export default Home;
