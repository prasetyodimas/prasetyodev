import HtmlIcon from "../assets/icons/skils/html.svg"
import CssIcon from "../assets/icons/skils/css.svg"
import JsIcon from "../assets/icons/skils/javascript.svg"
import TsIcon from "../assets/icons/skils/typescript.svg"
import SassIcon from "../assets/icons/skils/sass.svg"
import StylusIcon from "../assets/icons/skils/stylus.svg"
import BootstrapIcon from "../assets/icons/skils/bootstrap.svg"
import StyledComponentIcon from "../assets/icons/skils/styled-component.svg"
import MuireactIcon from "../assets/icons/skils/muireact.svg"
import ReactIcon from "../assets/icons/skils/react.svg"
import VueIcon from "../assets/icons/skils/vue.svg"
import VuetifyIcon from "../assets/icons/skils/vuetify.svg"
import AngularIcon from "../assets/icons/skils/angular.svg"
import GatsbyIcon from "../assets/icons/skils/gatsby.svg"
import JqueryIcon from "../assets/icons/skils/jquery.svg"
import PugIcon from "../assets/icons/skils/pug.svg"
import HandlebarIcon from "../assets/icons/skils/handlebars.svg"
import NodeIcon from "../assets/icons/skils/node.svg"
import PhpIcon from "../assets/icons/skils/php.svg"
import LaravelIcon from "../assets/icons/skils/laravel.svg"
import MysqlIcon from "../assets/icons/skils/mysql.svg"
import WebpackIcon from "../assets/icons/skils/webpack.svg"
import GulpIcon from "../assets/icons/skils/gulp.svg"
import NpmIcon from "../assets/icons/skils/npm.svg"
import GithubIcon from "../assets/icons/skils/github.svg"
import GitlabIcon from "../assets/icons/skils/gitlab.svg"
import BitbucketIcon from "../assets/icons/skils/bitbucket.svg"
import NetlifyIcon from "../assets/icons/skils/netlify.svg"
import XamppIcon from "../assets/icons/skils/xampp.svg"
import VscodeIcon from "../assets/icons/skils/vscode.svg"
import WebstromIcon from "../assets/icons/skils/webstrom.svg"
import PostmanIcon from "../assets/icons/skils/postman.svg"
import FigmaIcon from "../assets/icons/skils/figma.svg"
import NotionIcon from "../assets/icons/skils/notion.svg"
import JiraIcon from "../assets/icons/skils/jira.svg"
import GoogleAnalyticsIcon from "../assets/icons/skils/google-analytics.svg"
import GoogleTagIcon from "../assets/icons/skils/google-tag.svg"

const skillGroups = [
  {
    id: "languages",
    label: "Languages & Styling",
    description: "The foundation I write every interface with.",
    skills: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "JavaScript", icon: JsIcon },
      { name: "TypeScript", icon: TsIcon },
      { name: "Sass / SCSS", icon: SassIcon },
      { name: "Stylus", icon: StylusIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "Styled Components", icon: StyledComponentIcon },
      { name: "MUI React", icon: MuireactIcon },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Frameworks",
    description: "Component architecture, SPA and static site delivery.",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Vue", icon: VueIcon },
      { name: "Vuetify", icon: VuetifyIcon },
      { name: "Angular", icon: AngularIcon },
      { name: "Gatsby", icon: GatsbyIcon },
      { name: "jQuery", icon: JqueryIcon },
      { name: "Pug", icon: PugIcon },
      { name: "Handlebars", icon: HandlebarIcon },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    description: "Services, APIs and persistence layers I build against.",
    skills: [
      { name: "Node.js", icon: NodeIcon },
      { name: "PHP", icon: PhpIcon },
      { name: "Laravel", icon: LaravelIcon },
      { name: "MySQL", icon: MysqlIcon },
      { name: "XAMPP", icon: XamppIcon },
    ],
  },
  {
    id: "infra",
    label: "Build, CI & Infrastructure",
    description: "How the code gets bundled, versioned and shipped.",
    skills: [
      { name: "Webpack", icon: WebpackIcon },
      { name: "Gulp", icon: GulpIcon },
      { name: "npm", icon: NpmIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "GitLab", icon: GitlabIcon },
      { name: "Bitbucket", icon: BitbucketIcon },
      { name: "Netlify", icon: NetlifyIcon },
    ],
  },
  {
    id: "tools",
    label: "Tooling & Collaboration",
    description: "Daily drivers for design, debugging and delivery.",
    skills: [
      { name: "VS Code", icon: VscodeIcon },
      { name: "WebStorm", icon: WebstromIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "Notion", icon: NotionIcon },
      { name: "Jira", icon: JiraIcon },
      { name: "Google Analytics", icon: GoogleAnalyticsIcon },
      { name: "Google Tag Manager", icon: GoogleTagIcon },
    ],
  },
]

export default skillGroups
