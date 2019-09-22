import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faIdCard, faLaughBeam, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faEnvelope, faHome, faIdCard, faGitSquare, faLaptopCode, faLaughBeam)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}