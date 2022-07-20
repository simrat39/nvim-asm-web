import { useState, useEffect } from "react"
import PluginList from "../types/PluginList"

let localCache: PluginList;

function useNvimPlugins() {
  const [data, setData] = useState<PluginList>({})

  useEffect(() => {
    if (!localCache) {
      getJsonData()
    }

    async function getJsonData() {
      setData({})

      const res = await fetch("https://raw.githubusercontent.com/simrat39/nvim-asm-web/master/parser/output.json")
      const json = await res.json()

      localCache = json as PluginList
      setData(localCache)
    }
  }, [])

  return data
}

export default useNvimPlugins
