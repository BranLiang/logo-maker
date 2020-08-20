import * as JsSearch from "js-search"
import googleFonts from "./google_fonts"

const search = new JsSearch.Search('family')
search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
search.addIndex('family')
search.addDocuments(googleFonts)

export default search;