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
        path: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: '/tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: '/tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: '/demo',
        component: DemoView,
        name: 'Demos',
        meta: {description: 'Demo!!!!'}
      }, {
        path: '/setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: '/access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: '/server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers'}
      }, {
        path: '/repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
