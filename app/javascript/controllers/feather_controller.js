// Icons
import feather from "feather-icons"
import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    feather.replace()
  }
}
