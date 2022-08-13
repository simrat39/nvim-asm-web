import { useState, useEffect } from "react";
import PluginList from "../types/PluginList";

let localCache: PluginList;

function useNvimPlugins(): [boolean, PluginList] {
  const [data, setData] = useState<PluginList>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!localCache) {
      getJsonData();
    }

    async function getJsonData() {
      setData({});
      setLoading(true)

      const res = await fetch(
        "https://raw.githubusercontent.com/simrat39/nvim-asm-web/master/parser/output.json"
      );
      const json = await res.json();

      localCache = json as PluginList;
      setData(localCache);
      setLoading(false)
    }
  }, []);

  return [loading, data];
}

export default useNvimPlugins;
