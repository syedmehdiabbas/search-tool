import React, { useEffect } from "react";
import { useState } from "react";

import { Button, HStack, VStack, Box } from "@chakra-ui/react";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import Check from "./components/Check";
import Header from "./components/Header";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import { dateInputOptions } from "./components/dateInputOptions";
import { customStyles, customTheme } from "../components/Select/styles";
import fileTypes from "./../data/fileTypes";

function Home({ searchEngine }) {
  const [input, setInput] = useState("");
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [hideAiResults, setHideAiResults] = useState(false);
  const [exactSearch, setExactSearch] = useState(false);
  const websiteList = JSON.parse(localStorage.getItem("websiteList") ?? "[]");
  const [fullWebsiteList, setFullWebsiteList] = useState(websiteList);

  const getInitialQuery = () => {
    const searchParam = searchEngine === "google" ? "search?" : "?";
    let query = `https://${searchEngine}.com/${searchParam}q=${input}`;
    if (hideAiResults) {
      query += "&udm=14";
    }
    if (exactSearch) {
      query = query.replace(input, `"${input}"`);
    }
    return query;
  };

  const getAddedSite = () => {
    if (selectedWebsite) return ` site:${selectedWebsite.value}`;
    return "";
  };

  const getFileType = () => {
    if (selectedFileType) return ` filetype:${selectedFileType.value}`;
    return "";
  };

  const getYear = () => {
    if (selectedTime) return ` ${selectedTime.value}`;
    return "";
  };

  const resetSearch = () => {
    setInput("");
    setSelectedWebsite(null);
    setSelectedFileType(null);
    setSelectedTime(0);
    setHideAiResults(false);
    setExactSearch(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = `${getInitialQuery()}${getAddedSite()}${getFileType()}${getYear()}`;
    if (input) {
      window.open(query);
    }
  };

  const addWebsiteToLocalStorage = (website) => {
    const websiteList =
      JSON.parse(localStorage.getItem("websiteList") ?? "[]") ?? [];
    websiteList.push(website);
    localStorage.setItem("websiteList", JSON.stringify(websiteList));
  }

  const isValidWebsiteName = (website) => {
    if(!website) return false;
    if(fullWebsiteList.includes(website)) return false;
    if(!website.includes(".")) return false;
    if(website[website.length - 1] == ".") return false;
    return true;
  }

  const addWebsiteOption = (website) => {
    const websiteOption = { value: website, label: website };
    if(!isValidWebsiteName()) {
      return;
    }
    setSelectedWebsite(websiteOption);
    setFullWebsiteList((x) => [...x, website]);
    addWebsiteToLocalStorage(website);
  };

  const fileTypesOptions = fileTypes.map((f) => ({ value: f, label: f }));
  const websiteOptions = fullWebsiteList.map((x) => ({
    value: x,
    label: x,
  }));

  return (
    <form onSubmit={handleSearch}>
      <VStack alignItems="center" spacing={8} maxW="3xl" mx="auto" px={2}>
        <Header />
        <VStack spacing={4} width="full" maxWidth="md">
          <SearchInput
            input={input}
            handleInput={(e) => setInput(e.target.value)}
          />
          <Box width="full">
            <CreatableSelect
              value={selectedWebsite}
              onChange={(x) => setSelectedWebsite(x)}
              options={websiteOptions}
              placeholder="specific site: example.com"
              onCreateOption={addWebsiteOption}
              styles={customStyles}
              theme={customTheme}
              formatCreateLabel={(inputValue) => isValidWebsiteName(inputValue) ? `search results only from "${inputValue}"` : inputValue}
              isClearable={true}
              tabIndex={3}
            />
          </Box>
          <Box width="full">
            <ReactSelect
              value={selectedTime}
              onChange={(x) => setSelectedTime(x)}
              options={dateInputOptions}
              placeholder="time"
              isClearable
              styles={customStyles}
              theme={customTheme}
              tabIndex={4}
            />
          </Box>
          <Box width="full">
            <CreatableSelect
              value={selectedFileType}
              onChange={(x) => setSelectedFileType(x)}
              options={fileTypesOptions}
              placeholder="file type"
              isClearable
              styles={customStyles}
              theme={customTheme}
              formatCreateLabel={(inputValue) => `search file type "${inputValue}"`}
              tabIndex={5}
            />
          </Box>
          <HStack width="full" justifyContent="center" gap={8} flexWrap={true}>
            <Check
              val={hideAiResults}
              handleChange={(e) => setHideAiResults((x) => !x)}
              text="Hide AI overview"
              label="To hide automatic AI overview on the results page"
              tabIndex={6}
            />
            <Check
              val={exactSearch}
              handleChange={(e) => setExactSearch((x) => !x)}
              text="Exact search"
              label="To search the term verbatim"
              tabIndex={7}
            />
          </HStack>
        </VStack>
        <SearchButton isDisabled={input === ""} />
        <Button
          onClick={resetSearch}
          variant="outline"
          paddingInline={6}
          rounded="full"
          tabIndex={9}
          color="gray.500"
        >
          Reset
        </Button>
      </VStack>
    </form>
  );
}

export default Home;
