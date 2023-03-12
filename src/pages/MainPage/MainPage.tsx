import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import SearchButton from "@components/Button/SearchSvg";
import SearchSvg from "@components/Button/SearchSvg";
import { MultiDropdown, Option } from "@components/MultiDropdown/MultiDropdown";
import { Card } from "@components/Card/Card";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSetValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.search}>
        <Input
          placeholder="Search Cryptocurrency"
          value={searchValue}
          onChange={handleSetValue}
        />
        <Button>
          <SearchSvg />
        </Button>
      </div>
      <div className={styles.category}>
        {/*<h4 className={styles.category_header}>Coins</h4>*/}
        <MultiDropdown
          options={[
            { key: "msk", value: "Москва" },
            { key: "spb", value: "Санкт-Петербург" },
            { key: "ekb", value: "Екатеринбург" },
          ]}
          value={[{ key: "msk", value: "Москва" }]}
          onChange={(value: Option[]) => console.log(value)}
          pluralizeOptions={() => ""}
        />
      </div>
      <div className={styles.coin_list}>
        <Card
          image={
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          }
          title={"Bitcoin"}
          subtitle={"btc"}
        />
        <Card
          image={
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          }
          title={"Bitcoin"}
          subtitle={"btc"}
        />{" "}
        <Card
          image={
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          }
          title={"Bitcoin"}
          subtitle={"btc"}
        />{" "}
        <Card
          image={
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          }
          title={"Bitcoin"}
          subtitle={"btc"}
        />{" "}
        <Card
          image={
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          }
          title={"Bitcoin"}
          subtitle={"btc"}
        />
      </div>
    </div>
  );
};

export default MainPage;
