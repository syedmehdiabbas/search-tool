import React from "react";
import { useState } from "react";

import { Button, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import Select from "./../components/Select";
import { Input } from "@chakra-ui/react";
import fileTypes from "./../data/fileTypes";
import {dateInputOptions} from "./components/dateInputOptions";
import AiCheck from "./components/AiCheck";

function Home({ searchEngine }) {
  const [input, setInput] = useState("");
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [hideAiResults, setHideAiResults] = useState(false);

  const getInitialQuery = () => {
    const searchParam = searchEngine === "google" ? "search?" : "?";
    let query = `https://${searchEngine}.com/${searchParam}q=${input}`;
    if(hideAiResults) {
      query += "&udm=14";
    }
    return query;
  };

  const getAddedSite = () => {
    if(selectedWebsite) return ` site:${selectedWebsite}`;
    return "";
  };

  const getFileType = () => {
    if (selectedFileType) return ` filetype:${selectedFileType.value} `;
    return "";
  };

  const getYear = () => {
    if (selectedTime) return selectedTime.value;
    return "";
  };

  const resetSearch = () => {
    setInput("");
    setSelectedWebsite("");
    setSelectedFileType(null);
    setSelectedTime(0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = `${getInitialQuery()}${getAddedSite()}${getFileType()}${getYear()}`;
    if(input) {
      window.open(query);
    }
  };

  const fileTypesOptions = fileTypes.map(f => ({ value: f, label: f}));

  return (
    <form onSubmit={handleSearch}>
      <VStack
        alignItems="center"
        spacing={8}
        maxW="3xl"
        mx="auto"
        px={2}
      >
        <Header />
        <VStack 
          spacing={8} 
          width="full"
          maxWidth="md"
        >
          <SearchInput 
            input={input} 
            handleInput={(e) => setInput(e.target.value)}
          />
          <VStack 
            spacing={4} 
            width="full"
          >
          <Input
            type="search"
            placeholder="specific site: example.com"
            size="md"
            variant="outline"
            border="1px"
            borderColor="gray.400"
            focusBorderColor="purple.300"
            value={selectedWebsite}
            rounded="full"
            _hover={{ borderColor: "gray.500" }}
            _placeholder={{ color: "gray.500" }}
            onChange={(e) => setSelectedWebsite(e.target.value)}
            tabIndex={3}
          />
          <Select
            value={selectedTime}
            handleSelect={(x) => setSelectedTime(x)}
            options={dateInputOptions}
            placeholder="time"
          />
          <Select
            value={selectedFileType}
            handleSelect={(x) => setSelectedFileType(x)}
            options={fileTypesOptions}
            placeholder="file type"
            />
          <AiCheck
            val={hideAiResults}
            handleChange={(e) => setHideAiResults(e.target.value)}
          />
        </VStack>
        </VStack>
        <SearchButton isDisabled={input === ""} />
        <Button
          onClick={resetSearch}
          variant="outline"
          paddingInline={6}
          rounded="full"
          tabIndex={6}
          color="gray.500"
        >
          Reset
        </Button>
      </VStack>
    </form>
  );
}

export default Home;
