import * as JsSearch from "js-search"
import googleFonts from "./google_fonts"

const search = new JsSearch.Search('fonts')
search.addIndex('family')
search.addDocuments(googleFonts)

export default search;