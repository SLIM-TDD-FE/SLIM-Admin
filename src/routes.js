import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/dash/Dashboard.vue'
import TablesView from './components/dash/Tables.vue'
import TasksView from './components/dash/Tasks.vue'
import SettingView from './components/dash/Setting.vue'
import AccessView from './components/dash/Access.vue'
import ServerView from './components/dash/Server.vue'
import ReposView from './components/dash/Repos.vue'
import DemoView from './components/dash/Demo.vue'
import HomeView from './components/dash/Home.vue'
import MenuView from './components/dash/Menu.vue'
import OverviewView from './components/dash/Overview.vue'
import SummaryView from './components/dash/Summary.vue'
import PeriodView from './components/dash/Period.vue'
import FBSatisView from './components/dash/FBSatis.vue'
import PropertyView from './components/dash/Property.vue'
import GCView from './components/dash/GC.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  }, {
    path: '/',
    component: DashView,
    auth: true,
    children: [
      {
        path: '/',
        component: HomeView,
        name: 'Home',
        meta: {description: ''}
      }, {
        path: '/dashboard',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: ''}
      }, {
        path: '/tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: ''}
      }, {
        path: '/home',
        component: HomeView,
        name: 'Home',
        meta: {description: ''}
      }, {
        path: '/menu',
        component: MenuView,
        name: 'Menu',
        meta: {description: ''}
      }, {
        path: '/overview',
        component: OverviewView,
        name: 'Overview',
        meta: {description: ''}
      }, {
        path: '/summary',
        component: SummaryView,
        name: 'Summary',
        meta: {description: ''}
      }, {
        path: '/period',
        component: PeriodView,
        name: 'Period',
        meta: {description: ''}
      }, {
        path: '/FBSatis',
        component: FBSatisView,
        name: 'F&B Satisfication',
        meta: {description: ''}
      }, {
        path: '/property',
        component: PropertyView,
        name: 'Property',
        meta: {description: ''}
      }, {
        path: '/GC',
        component: GCView,
        name: 'GC',
        meta: {description: ''}
      }, {
        path: '/tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: ''}
      }, {
        path: '/demo',
        component: DemoView,
        name: 'Demos',
        meta: {description: ''}
      }, {
        path: '/setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: ''}
      }, {
        path: '/access',
        component: AccessView,
        name: 'Access',
        meta: {description: ''}
      }, {
        path: '/server',
        component: ServerView,
        name: 'Servers',
        meta: {description: ''}
      }, {
        path: '/repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: ''}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
